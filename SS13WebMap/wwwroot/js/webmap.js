let codebase_id = document.getElementById("codebase_id").innerHTML;
let map_id = document.getElementById("map_id").innerHTML;
console.log(`Loading data for ${codebase_id}/${map_id}`);

// Get the data for this mmap
fetch(`/maps/${codebase_id}/${map_id}/?d=y`).then(r => r.json()).then(r => {
    const bounds = [[0, 0], r.bounds];
    // Calculate our center
    const center_coords = [Math.ceil(r.bounds[0] / 2), Math.ceil(r.bounds[1] / 2)]
    const map_config = {
        "center": center_coords, "zoom": 4,
        "crs": L.CRS.Simple
    };

    // Map layers
    let local_maplayers = [];
    // Pipe layers
    let local_pipelayers = [];

    // Add the Zs where applicable for the main layers
    r.maplayers.forEach(l => {
        local_maplayers.push({
            "z": local_maplayers.length + 1,
            "name": l.name,
            "url": l.path
        })
    });

    // And for the pipe layers
    r.pipelayers.forEach(l => {
        local_pipelayers.push({
            "z": local_pipelayers.length + 1,
            "name": l.name,
            "url": l.path
        })
    });

    // Setup the image config for the baking script
    const image_config = {
        "map": local_maplayers,
        "pipenet": local_pipelayers
    };

    // Setup the leaflet object with the correct properties
    var webmap = L.map('webmap', map_config);
    webmap.fitBounds(bounds);
    webmap.setMaxBounds(bounds);
    webmap.attributionControl.setPrefix('SS13 WebMap by AffectedArc07');

    // Log the layers
    var lazylayers = bakeLayers(image_config, webmap, bounds);
    console.info(lazylayers);

    // Add the leaflet controls
    L.control.layers(lazylayers.mapOpt, lazylayers.pipenet).addTo(webmap);

    // Add coordinate reader if applicable
    if (r.fancy) {
        attachListener(webmap, bounds);
    }
});

window.onload = function () {
    // This is JQuery pain that needs eradicating
    $(".page_loader").fadeOut("slow");
};