/* @preserve
 * JS Singleton for SS13Webmap
 * MIT License (https://raw.githubusercontent.com/affectedarc07/SS13WebMap/master/LICENSE.MD)
 */
var SS13Webmap = (function(){
	var maps, pipes, deaths, divcontent, mapconfig, bounds; //configs
	var webmap;
	var maxdeath = 200;
	const ss13subsyslog = "color: blue; font-weight:bold; font-size:15px; font-family:Arial;";
	
	/**
	 * Loads the configs
	 * @param {JSON} cfg - Configuration, ex: ``{"maps":[],"pipes":[],"deaths":[],"bounds":[[0,0],[200,200]],"divcontent":"webmap","mapconfig":{oldmapcfg here}}`` 
	 */
	function loadCFG(cfg){
		console.info(`%cLoading config:`,ss13subsyslog);
		console.info(cfg);
		maps = cfg.maps ? cfg.maps : [];
		pipes = cfg.pipenet ? cfg.pipenet : null;
		deaths = cfg.deathmap ? cfg.deathmap : null;
		bounds = cfg.bounds ? cfg.bounds : [[0, 0], [-250, 250]];
		divcontent = cfg.divcontent ? cfg.divcontent : "webmap";
		mapconfig = cfg.mapconfig ? cfg.mapconfig : null;
		console.info("%cConfigs out:",ss13subsyslog);
		console.info(maps, pipes, deaths, bounds, divcontent, mapconfig);
	}
	/**
	 * Generates a new L.map(). Requires config to be loaded first
	 */
	function newWebmap_internal(){
		webmap = L.map(divcontent, mapconfig);
        webmap.fitBounds(bounds);
		webmap.setMaxBounds(bounds);
		webmap.attributionControl.setPrefix('SS13 WebMap by AffectedArc07');
		console.info("%cMap instance started",ss13subsyslog);
	}
	/**
	 * Builds all the layers (in the config)
	 */
	function bakeLayers(){
		var return_dat = {"option_1":{},"option_2":{}};
		return_dat.option_2["GPS"] = attachGPS(); //lazy? yes!
		//order: death heatmap, map, pipes
		if(deaths){
			var deathgroup = L.layerGroup()
			console.info("%cBuilding Deathmap",ss13subsyslog);
			for(var thing in deaths){
				var object = deaths[thing];
				var {url} = object; //z-level integration soooooooooooon(TM)
				var cache = XMLfetch(url, false); //block the sinks
				
				for(var key in cache){
					var cachejson = cache[key];//{"deaths":400,"cords":[140,110]}
					var opacity = cachejson.deaths/maxdeath
					let coords = ss132leaflet(cachejson.cords, bounds);
					var tangle = L.rectangle([[coords.lat+1, coords.lng],[coords.lat, coords.lng+1]],{
						"fill": true,"color":'#ff0000',
						"stroke":false,"interactive":false,
						"fillOpacity":opacity
					});
					deathgroup.push(tangle);
				}
			}
			return_dat.option_2["Deathmap"] = deathgroup;
			console.info("%cDeathmap built",ss13subsyslog);	
		}

		console.info("%cBuilding Map",ss13subsyslog);
		for(var thing in maps){
			var object = maps[thing];
			var {url, z, name} = object;
			var zname = (name ? name : "Base Map");
		
			if(maps.length > 1){
				zname = "Deck "+z;
			}
			return_dat.option_1[zname] = (z === 1 ? L.imageOverlay(url, bounds).addTo(webmap) : L.imageOverlay(url, bounds));
		}
		console.info("%cBuilt Map",ss13subsyslog);

		if(pipes.length == 0 || !pipes){	//Pipeskip 
			console.info("%cNo pipenet found, Returning.",ss13subsyslog);
			L.control.layers(return_dat.option_1, return_dat.option_2).addTo(webmap);
			return 
		}
		console.info("%cBuilding Pipes",ss13subsyslog)
		for(var thing in pipes){
			var object = pipes[thing];
			var {url, z} = object;
			var zname = "Pipenet";
		
			if(pipes.length > 1){
				zname = "Deck "+z;
			}
			return_dat.option_2[zname] = L.imageOverlay(url, bounds);
		}
		console.info("%cPipes built",ss13subsyslog)
		L.control.layers(return_dat.option_1, return_dat.option_2).addTo(webmap);
	}

	function attachGPS(){    
		var tangle = L.rectangle([[0, 0],[0, 0]], {"fill":false, "interactive":false, "color":'#40628a', "weight":5});
		var halt = false;
		tangle.on("remove", function(){
			halt = true
		})
		tangle.on("add", function(){
			halt = false;
		})
		webmap.on('mousemove', function(e){
			if(halt){
				return
			}
			var lat = Math.floor(e.latlng.lat);
			var lng = Math.floor(e.latlng.lng);
			var coords = leaflet2ss13(lat, lng, bounds);
			tangle.setBounds([[lat+1, lng],[lat, lng+1]]);
			tangle.bindTooltip(coords.x + ',' + coords.y).openTooltip();
		});
		return tangle.addTo(webmap);
	}
	function attachOptimizedPixelation(){
		webmap.on("zoom", function(e){
			var zoom = e.target._zoom;
			//console.log(zoom);
			if(zoom >= 6){
				$(".leaflet-image-layer").css("image-rendering", "pixelated");
				return
			}
			$(".leaflet-image-layer").css("image-rendering", "");
		})
	}
	/**
	 * Reads the "?thing=no"
	 * @returns {JSON} JSON
	 */
	function readquery(){
		var json_out = {};
		window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
			json_out[key] = value;
		});
		return json_out;
	}
	
	/**
	 * fetch() but XML
	 * @param {String} url - URL of object
	 * @param {Boolean} asinks - Async?
	 */
	function XMLfetch(url, asinks=true){
		var xhr = new XMLHttpRequest(); //now ie* compatable i think?
		xhr.open('GET', url, asinks);
		xhr.onload = function(){
			return JSON.parse(xhr.responseText);
		}
		xhr.send();
	}
	/**
	 * Converts leaflet latitude and longtitiude to ss13 cords, now accepts **any** maps (with proper bounds)
	 * @param {Number} lat
	 * @param {Number} lng
	 * @param {Array<Array>} bounds - The bound of an entire map, preferably the map dmm file "X" "Y" size
	 * @returns {JSON} Returns coordinate JSON
	 */
	function leaflet2ss13(lat, lng, bounds){
		var coords = {};
		coords.y = lat + Math.abs(bounds[1][0]) + 1; //must be pos because input is commonly neg
		coords.x = lng + 1;
		return coords
	}
	/**
	 * Exact opposite of leaflet2ss13
	 * @param {JSON} coords 
	 * @param {Array<Array>} bounds - The bound of an entire map, preferably the map dmm file "X" "Y" size
	 * @returns {JSON} - returns lat and lng
	 */
	function ss132leaflet(coords, bounds){
		var latlng = {};
		latlng.lat = coords.y - Math.abs(bounds[1][0]) - 1;
		latlng.lng = coords.x - 1;
		return latlng
	}

	return {
		/**
		 * Creates a new instance of ss13webmap. Use only once
		 * @param {JSON} cfg 
		 */
		newWebmap: function(cfg){
			loadCFG(cfg);
			newWebmap_internal();
			bakeLayers();
			attachOptimizedPixelation();
			$(window).load(function(){    
				setTimeout(function(){ //i want the fancy zoom anim
					const {x, y, zoom} = readquery();
					if(x && y){
						console.info("%cLoading query", ss13subsyslog);
						console.info(readquery());
						let xy = ss132leaflet({"x":Number(x),"y":Number(y)}, bounds);
						if(zoom){
							webmap.flyTo(L.latLng(xy.lat, xy.lng), Math.min(Number(zoom), mapconfig.maxZoom));
							return
						}
						webmap.flyTo(L.latLng(xy.lat, xy.lng));
					}
				}, Math.floor(Math.random()*700));
			});
		},
		/**
		 * Does the space animation thing
		 * @param {JSON} cfg 
		 */
		runFTL: function(cfg){
			var direction="E", mode="tg", speed_modifier=0, animate=true;
			if(cfg){
				direction = cfg.direction ? cfg.direction : "E";
				mode = cfg.mode ? cfg.mode : "tg";
				speed_modifier = cfg.speed_modifier ? cfg.speed_modifier : 0;
				animate = cfg.animate ? cfg.animate : true;
			}
			const layer1 = $("#layer1"), layer2 = $("#layer2"), layer3 = $("#layer3");
			const classes = {"tg":"TG_layer", "norm":"layer"};

			layer1.addClass(classes[mode]+"1");
			layer2.addClass(classes[mode]+"2");
			layer3.addClass(classes[mode]+"3");
			
			layer1.css("animation-name", "loop_" + direction);
			layer2.css("animation-name", "loop_" + direction);
			layer3.css("animation-name", "loop_" + direction);
			if(!animate){ //for plaingrass maps (see leben)
				return
			}
			layer1.css("animation-duration", Math.max(80 + speed_modifier, 1) + "s");
			layer2.css("animation-duration", Math.max(40 + speed_modifier, 1) + "s");
			layer3.css("animation-duration", Math.max(20 + speed_modifier, 1) + "s");
		}
	};
  })();