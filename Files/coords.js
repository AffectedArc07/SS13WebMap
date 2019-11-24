/* @preserve
 * JS Function helper for https://affectedarc07.github.io/SS13WebMap
 * MIT License (https://raw.githubusercontent.com/affectedarc07/SS13WebMap/master/LICENSE.MD)
 */

/**
 * Generates imageoverlay for the webmap
 * @param {JSON} data 
 * @param {L.Map} webmap
 * @param {Array<Array>} bounds - The bound of an entire map, preferably the map dmm file "Y" size
 * @returns {JSON} - Returns map and pipenet **imageOverlay** , ex: `{"z1":imageOverlay}`
 */
function bakeLayers(data, webmap, bounds){
    var mapjson = data.map;
    var pipenetjson = data.pipenet;
    var return_dat = {"mapOpt":{},"pipenet":{}};

    for(var thing in mapjson){
        var URL = mapjson[thing].url;
        var zlevel = mapjson[thing].z;
        var name = mapjson[thing].name;
        var image = L.imageOverlay(URL, bounds);
        var zname = "Base Map";

        if(zlevel == 1){
            image.addTo(webmap);
        }
        if(name){
            zname = name;
        }else if(mapjson.length > 1){
            zname = "Deck "+zlevel;
        }
        return_dat.mapOpt[zname] = image; // {mapOpt:{"z1":"imageOverlay"}}
    }
    console.info("done baking map");
    if(pipenetjson.length == 0){ //early return because pipenetjson length is 0 
        console.info("no pipenet found, skipping pipenet baking");
        return return_dat
    }
    for(var thing in pipenetjson){
        var URL = pipenetjson[thing].url;
        var zlevel = pipenetjson[thing].z;
        var image = L.imageOverlay(URL, bounds); //do not add pipelayers yet
        var zname = "Pipenet";
        if(URL == "" || URL == undefined){
            continue
        }
        if(pipenetjson.length > 1){
            zname = "Pipenet Z:"+zlevel;
        }
        return_dat.pipenet[zname] = image; // {pipeOpt:{"z1":"imageOverlay"}
    }
    console.info("done baking pipenet")
    return return_dat
}
/**
 * Attatch webmap listiners
 * @param {L.map} webmap -  The leaflet L.map()
 * @param {Array<Array>} bounds - The bound of an entire map, preferably the map dmm file "X,Y" size
 * @param {L.polygon} polygon  - Polygon, gets generated automaticaly
 */
function attachListener(webmap, bounds, polygon){
    if(!polygon){
        polygon = newpoly(webmap);
    }    
    webmap.on('mousemove', (e) => {
        var lat = Math.floor(e.latlng.lat);
        var lng = Math.floor(e.latlng.lng);
        var coords = leaflet2ss13(lat, lng, bounds);
        polygon.setLatLngs([
            [lat, lng],
            [lat + 1, lng],
            [lat + 1, lng + 1],
            [lat, lng + 1],
            [lat, lng]
        ]).redraw().bindTooltip(coords.x + ',' + coords.y).openTooltip().addTo(webmap);
    });

    let query = readquery();
    console.info(`Parsing parameter cords, param:`,query);
    if(query && ("x" in query) && ("y" in query)){
        let xy = ss132leaflet({"x":Number(query.x),"y":Number(query.y)}, bounds);
        webmap.setView(L.latLng(xy.lat, xy.lng));
        if("zoom" in query){
            webmap.setZoom(Number(query.zoom));
        }
    }else{
        console.info(`it's blank...`);
    }
}
/**
 * Adds metadata on the map
 * @param {JSON} data - JSON Array data 
 * @param {L.map} webmap - The leaflet L.map()
 */
function addMetadata(data, webmap){
    //soon, markers where there are valueable things
}
/**
 * Initialize the paralax (not started while the page is loading)
 * @param {String} dir - The direction, can be:`'N','S','E','W'`
 * @param {String} mode - Mode of the thing, either TG or normal, if empty it assumes it as normal ftl
 * @example
 * initFTL("N", "tg") 
 */
function initFTL(dir, mode, speedmodif){
    if(!dir || (dir != "N" && dir != "S" && dir !="E" && dir !="W")){
        dir="E";
    }
    if(!mode || (mode != "norm" && mode != "tg")){
        mode="norm";
    }
    if(!speedmodif || isNaN(speedmodif)){
        speedmodif = 0;
    }
    const layer1 = $("#layer1"), layer2 = $("#layer2"), layer3 = $("#layer3");
    const classes = {"tg":"TG_layer","norm":"layer"};

    var speeds = {};
    speeds.l1 = Math.max(80+speedmodif,1);
    speeds.l2 = Math.max(40+speedmodif,1);
    speeds.l3 = Math.max(20+speedmodif,1);

    layer1.addClass(classes[mode]+"1");
    layer2.addClass(classes[mode]+"2");
    layer3.addClass(classes[mode]+"3");
    layer1.css("animation-name", "loop_"+dir);
    layer2.css("animation-name", "loop_"+dir);
    layer3.css("animation-name", "loop_"+dir);
    layer1.animate({"animation-duration": speeds.l1+"s"}, 5000);
    layer2.animate({"animation-duration": speeds.l2+"s"}, 5000);
    layer3.animate({"animation-duration": speeds.l3+"s"}, 5000);
}

/* Helper Functions */
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
 * Creates a new polygon , requires the webmap
 * @param {L.map} webmap - The leaflet L.map()
 * @param {JSON} config - JSON Config
 * @returns {L.polygon} - Returns the polygon that got created
 */
function newpoly(webmap, config){
    if(!config){
        config = {"fill": false, "color": '#40628a', "weight": 5};
    }
    const c = ["Poly wanna cracker!", "Check the crystal, you chucklefucks!","Stop wasting precius bytes on the webmap Adri!!","Wire the solars, you lazy bums!","Stop breaking the webmap!!!","WHO TOOK THE DAMN HARDSUITS?","The console blares, GET https://www.googletagmanager.com/gtag/js?id=UA-115958323-1 net::ERR_BLOCKED_BY_CLIENT","CE, the clown ran \"rm -rf /\" on the NTNet station map server","OH GOD ITS ABOUT TO DELAMINATE CALL THE SHUTTLE"];
    console.warn("Poly "+["squawks","says","yells"][Math.floor(Math.random()*3)]+", "+c[Math.floor(Math.random()*c.length)]);
    var polygon = L.polygon([], config).addTo(webmap);
    return polygon
}

/**
 * Converts leaflet latitude and longtitiude to ss13 cords, now accepts **any** maps (with proper bounds)
 * @param {Number} lat
 * @param {Number} lng
 * @param {Array<Array>} bounds - The bound of an entire map, preferably the map dmm file "Y" size
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
 * @param {Array<Array>} bounds - The bound of an entire map, preferably the map dmm file "Y" size
 * @returns {JSON} - returns lat and lng
 */
function ss132leaflet(coords, bounds){
    var latlng = {};
    latlng.lat = coords.y - Math.abs(bounds[1][0]) || 255;
    latlng.lng = coords.x - 1;
    return latlng
}