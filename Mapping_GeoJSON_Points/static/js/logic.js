// let map = L.map("mapid", {
//   center: [
//     37.5, -122.5
//   ],
//   zoom: 10
// });
let map = L.map("mapid", {
  center: [
    30, 30
  ],
  zoom: 2
});

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
  "type":"Feature",
  "properties":{
    "id":"3469",
    "name":"San Francisco International Airport",
    "city":"San Francisco",
    "country":"United States",
    "faa":"SFO",
    "icao":"KSFO",
    "alt":"13",
    "tz-offset":"-8",
    "dst":"A",
    "tz":"America/Los_Angeles"},
    "geometry":{
      "type":"Point",
      "coordinates":[-122.375,37.61899948120117]}}
]};

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
}).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/leonid-tkach/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // // We turn each feature into a marker on the map.
//   // pointToLayer: function(feature, latlng) {
//   //   console.log(feature);
//   //   return L.marker(latlng)
//   //     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   // }
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//   }
// }).addTo(map);
d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
    }
  }).addTo(map);
});
