let codebase_id = document.getElementById("codebase_id").innerHTML;
let map_id = document.getElementById("map_id").innerHTML;
console.log(`Loading data for ${codebase_id}/${map_id}`);

fetch(`/maps/${codebase_id}/${map_id}/?d=y`).then(r => r.json()).then(r => {
    const bounds = [[0, 0], r.bounds];
    // Calculate our center
    const center_coords = [Math.ceil(r.bounds[0] / 2), Math.ceil(r.bounds[1] / 2)]
    const map_config = {
        "center": center_coords, "zoom": 4,
        "crs": L.CRS.Simple
    };

    let local_maplayers = [];
    let local_pipelayers = [];

    r.maplayers.forEach(l => {
        local_maplayers.push({
            "z": local_maplayers.length + 1,
            "name": l.name,
            "url": l.path
        })
    });

    r.pipelayers.forEach(l => {
        local_pipelayers.push({
            "z": local_pipelayers.length + 1,
            "name": l.name,
            "url": l.path
        })
    });

    const image_config = {
        "map": local_maplayers,
        "pipenet": local_pipelayers
    };

    var webmap = L.map('webmap', map_config);
    webmap.fitBounds(bounds);
    webmap.setMaxBounds(bounds);
    webmap.attributionControl.setPrefix('SS13 WebMap by AffectedArc07');

    var lazylayers = bakeLayers(image_config, webmap, bounds);
    console.info(lazylayers);
    L.control.layers(lazylayers.mapOpt, lazylayers.pipenet).addTo(webmap);
    if (r.fancy) {
        attachListener(webmap, bounds);
    }
})