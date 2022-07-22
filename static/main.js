
// Leaflet interactive maps
// initialize the map on the "map" div with a given center and zoom
var map = L.map("map", {
    center: [50.5, 30.5],
    zoom: 13,
    zoomControl: false,
  });
  
  L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }).addTo(map);