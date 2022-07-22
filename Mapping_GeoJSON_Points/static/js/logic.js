let map = L.map("mapid", {
  center: [
    37.5, -122.5
  ],
  zoom: 10
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

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);