// Leaflet interactive maps
// initialize the map on the "map" div with a given center and zoom
var map = L.map("map", {
  center: [37.40599, -122.078514],
  zoom: 13,
  zoomControl: false,
});

var locationIcon = L.icon({
  iconUrl: "static/images/icon-location.svg",
});

L.marker([37.40599, -122.078514], { icon: locationIcon }).addTo(map);

L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

document.addEventListener("alpine:init", () => {
  Alpine.data("tracker", () => ({
    ip: "",
    loading: false,
    timezone: "",
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
    formatTimezone() {
      this.timezone = "UTC " + this.ipInfo.location.timezone;
    },
    getIpInfo() {
      this.loading = true;
      fetch(`https://gentle-atoll-09797.herokuapp.com/api/${this.ip}`)
        .then((r) => r.json())
        .then((json) => {
          this.ipInfo = json;
          this.loading = false;
          map.setView(
            new L.LatLng(this.ipInfo.location.lat, this.ipInfo.location.lng),
            8
          );

          L.marker([this.ipInfo.location.lat, this.ipInfo.location.lng], {
            icon: locationIcon,
          }).addTo(map);
        });
    },
  }));
});
