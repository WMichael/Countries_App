
function mapInit(lat,lng) {
    // console.log(lat + " " + lng);
    // var mymap = L.map('mapid').setView([lat, lng], 13);
    

	var mymap = L.map('mapid').setView([lat, lng], 6);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid21pY2hhZWwiLCJhIjoiY2p1MTl6dDNzMDZjajN5bW94NW16enFhaCJ9.GLfEHsg4VdNy4f1Xc2BUdg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


}