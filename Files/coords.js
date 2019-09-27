
/**
 * Generates imageoverlay for the webmap
 * @param {JSON} data 
 * @param {Layer.webmap} webmap
 * @returns {JSON} - Returns map and pipenet **imageOverlay** , ex: `{"z1":imageOverlay}`
 */
function bakeLayers(data, webmap){
    var mapjson = data.map;
    var pipenetjson = data.pipenet;
    var return_dat = {"mapOpt":{},"pipenet":{}};

    for(var thing in mapjson){
        var URL = mapjson[thing].url;
        var zlevel = mapjson[thing].z;
        var image = L.imageOverlay(URL, bounds);
        var zname = "Base Map";

        if(zlevel == 1){
            image.addTo(webmap);
        }
        if(mapjson.length > 1){
            zname = "Map Z:"+zlevel;
        }
        return_dat.mapOpt[zname] = image; // {mapOpt:{"z1":"imageOverlay"}
    }
    console.info("done baking map")
    for(var thing in pipenetjson){
        var URL = pipenetjson[thing].url;
        var zlevel = pipenetjson[thing].z;
        var image = L.imageOverlay(URL, bounds); //do not add pipelayers yet
        var zname = "Pipenet";

        if(pipenetjson.length > 1){
            zname = "Pipenet Z:"+zlevel;
        }
        return_dat.pipenet[zname] = image; // {pipeOpt:{"z1":"imageOverlay"}
    }
    console.info("done baking pipenet")
    return return_dat
}

/**
 * Attatch a webmap listiner
 * @param {L.map} webmap -  The leaflet L.map()
 * @param {L.polygon} polygon  - Polygon, gets generated automaticaly
 */
function attachListiner(webmap, polygon=newpoly(webmap)){    
    webmap.on('mousemove', (e) => {
        var lat = Math.floor(e.latlng.lat);
        var lng = Math.floor(e.latlng.lng);
        var coords = leaflet2ss13(lat, lng);
        polygon.setLatLngs([
            [lat, lng],
            [lat + 1, lng],
            [lat + 1, lng + 1],
            [lat, lng + 1],
            [lat, lng]
        ]).redraw().bindTooltip(coords.x + ',' + coords.y).openTooltip().addTo(webmap);
    });
}

/**
 * Creates a new polygon , requires the webmap
 * @param {L.map} webmap - The leaflet L.map()
 * @param {JSON} config - JSON Config
 * @returns {L.polygon} - Returns the polygon that got created
 */
function newpoly(webmap, config={"fill": false, "color": '#40628a', "weight": 5}){
    var polygon = L.polygon([], config).addTo(webmap);
    return polygon
}

/**
 * Converts leaflet latitude and longtitiude to ss13 cords
 * @param {Number} lat
 * @param {Number} lng
 * @returns {JSON} - Returns coordinate JSON
 */
function leaflet2ss13(lat, lng){
    var coords = {};
    coords.y = lat + 256;
    coords.x = lng + 1;
    return coords
}
/**
 * Exact opposite of leaflet2ss13
 * @param {JSON} coords 
 * @returns {JSON} - returns lat and lng
 */
function ss132leaflet(coords){
    var latlng = {}
    latlng.lat = coords.y - 256;
    latlng.lng = coords.x - 1;
    return latlng
}