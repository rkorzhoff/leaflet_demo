var myMap = L.map('mapid').setView([51.505, -0.09], 5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoicmtvcnpob2ZmIiwiYSI6ImNra3liMWo5ZTA3dDYycnFvaXdrYjNoZHMifQ.jM_B8RqX6x0KU504U5rvZw',
}).addTo(myMap);
myMap.addEventListener('click', function addMarker(e) {
  var newMarker = new L.marker(e.latlng, {}).addTo(myMap);
});
