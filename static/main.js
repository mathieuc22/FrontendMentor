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

document.addEventListener("alpine:init", () => {
  Alpine.data("tracker", () => ({
    ip: "",
    loading: false,
    ipInfo: {
      ip: "8.8.8.8",
      location: {
        country: "US",
        region: "California",
        city: "Mountain View",
        lat: 37.40599,
        lng: -122.078514,
        postalCode: "94043",
        timezone: "-07:00",
        geonameId: 5375481,
      },
      domains: [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn",
      ],
      as: {
        asn: 15169,
        name: "Google LLC",
        route: "8.8.8.0/24",
        domain: "https://about.google/intl/en/",
        type: "Content",
      },
      isp: "Google LLC",
    },
    loaded: false,
    getIpInfo() {
      this.loading = true;
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=xxx&ipAddress=${this.ip}`
      )
        .then((r) => r.json())
        .then((json) => {
          this.ipInfo = json;
          this.loaded = true;
          this.loading = false;
          map.setView(
            new L.LatLng(this.datas.location.lat, this.datas.location.lng),
            8
          );
        });
    },
  }));
});
