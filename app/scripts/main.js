window.onload = function () {
    var map = L.map('map').setView([48, 2], 7);

    var wms = L.geoportalLayer.WMS({
        layer : "ORTHOIMAGERY.ORTHOPHOTOS"
    });

    wms.addTo(map);

    var wmts = L.geoportalLayer.WMTS({
        layer : "GEOGRAPHICALGRIDSYSTEMS.MAPS"
    },
    {
        opacity : 0.5
    });

    wmts.addTo(map);

    var mouse = L.geoportalControl.MousePosition();
    map.addControl(mouse);

    var search = L.geoportalControl.SearchEngine();
    map.addControl(search);

    var switcher = L.geoportalControl.LayerSwitcher();
    map.addControl(switcher);

    L.marker([48.844966, 2.424569]).addTo(map)
    .bindPopup('IGN')
    .openPopup();
}
