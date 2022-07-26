// Leaflet interactive maps
// initialize the map on the "map" div with a given center and zoom
var map = L.map("map", {
  center: [37.40599, -122.078514],
  zoom: 13,
  zoomControl: false,
});

var locationIcon = L.icon({
  iconUrl: "static/images/icon-location.svg",
  iconAnchor: [23, 56],
});

let marker = L.marker([37.40599, -122.078514], {
  icon: locationIcon,
}).addTo(map);

L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

document.addEventListener("alpine:init", () => {
  Alpine.data("tracker", () => ({
    ip: "",
    isIP(ip) {
      var re = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
      return re.test(ip);
    },
    isDomain(ip) {
      var re = /^(((?!\-))(xn\-\-)?[a-z0-9\-_]{0,61}[a-z0-9]{1,1}\.)*(xn\-\-)?([a-z0-9\-]{1,61}|[a-z0-9\-]{1,30})\.[a-z]{2,}$/;
      return re.test(ip);
    },
    loading: false,
    timezone: "",
    location: "",
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
    formatLocation() {
      this.location =
        this.ipInfo.location.city +
        ", " +
        this.ipInfo.location.region +
        " " +
        this.ipInfo.location.postalCode;
    },
    init() {
      this.getIpInfo();
    },
    submitData() {
      // Ensures all fields have data before submitting
      if (this.ip && !this.isIP(this.ip) && !this.isDomain(this.ip)) {
        alert("Please fill out a correct ip and try again!");
        return;
      } else {
        this.getIpInfo();
      }
    },
    getIpInfo() {
      this.loading = true;
      const API = 'https://gentle-atoll-09797.herokuapp.com/api'
      let url = this.isDomain(this.ip) ? `${API}?domain=${this.ip}` : `${API}?ip=${this.ip}`;
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          this.ipInfo = json;
          this.loading = false;
          this.timezone = "UTC " + this.ipInfo.location.timezone;
          this.location =
            this.ipInfo.location.city +
            ", " +
            this.ipInfo.location.region +
            " " +
            this.ipInfo.location.postalCode;
          map.setView(
            new L.LatLng(this.ipInfo.location.lat, this.ipInfo.location.lng),
            8
          );
          marker.setLatLng([
            this.ipInfo.location.lat,
            this.ipInfo.location.lng,
          ]);
        })
        .catch((error) => {
          alert(error)
        });
    },
  }));
});
