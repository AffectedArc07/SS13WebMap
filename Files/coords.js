var polygon = L.polygon([], {
    fill: false,
    color: '#40628a',
    weight: 5,
}).addTo(webmap);

webmap.on('mousemove', function (e) {
    lat = Math.floor(e.latlng.lat)
    lng = Math.floor(e.latlng.lng)
    var coords = leaflet2ss13(lat, lng)
    polygon.setLatLngs([
        [lat, lng],
        [lat + 1, lng],
        [lat + 1, lng + 1],
        [lat, lng + 1],
        [lat, lng]
    ]).redraw().bindTooltip(coords.x + ',' + coords.y).openTooltip().addTo(webmap)
});

function leaflet2ss13(lat, lng) {
    coords = {}
    coords.y = ((lat + 255) + 1)
    coords.x = ((lng * 1) + 1)
    return coords
}