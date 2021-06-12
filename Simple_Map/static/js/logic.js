// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows (This method is useful when we need to add multiple tile layers, or a background image of our map(s)):
    // Create the map object with a center and zoom level.
        // let map = L.map("mapid", {
        //     center: [
        //     40.7, -94.5
        //     ],
        //     zoom: 4
        // });
// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// Add a Circle to the Map
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);
// Alternatively, we can Add a circle using the circleMarker() function.
// L.circleMarker([34.0522, -118.2437]).addTo(map);

L.circleMarker([34.0522, -118.2437],{
    radius: 300,
    color: "lightyellow",
    fillcolor: "#ffffa1"
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// To change the map's style, change the map id using the list of Mapbox ids below:
//     mapbox/streets-v11
//     mapbox/outdoors-v11
//     mapbox/light-v10
//     mapbox/dark-v10
//     mapbox/satellite-v9
//     mapbox/satellite-streets-v11

