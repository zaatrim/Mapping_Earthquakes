// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// An alternative to using the setView()method is to modify each attribute in the map object using the curly braces notation as follows:
        // Create the map object with a center and zoom level.
        // let map = L.map("mapid", {
        //     center: [40.7, -94.5],
        //     zoom: 4
        //   });


// Create the map object with center and zoom level. Change the geographical center of the map to the geographical center of the Earth and set the zoom level as follows:
// let map = L.map('mapid').setView([30, 30], 2);

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};




// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// // The pointToLayer Function
    // // Grabbing our GeoJSON data.
    // L.geoJson(sanFranAirport, {
    //     // We turn each feature into a marker on the map.
    //     pointToLayer: function(feature, latlng) {
    //     console.log(feature);
    //     return L.marker(latlng)
    //     //   Use the below code to create a Circle Marker 
    //     //   return L.circleMarker(latlng);
    //   // To add a popup marker, we need to use the bindPopup()  
    //     .bindPopup("<h2>" + feature.properties.city + "</h2>");
    //     }

    // }).addTo(map);

// //  The onEachFeature Function
//     L.geoJson(sanFranAirport, {
//         onEachFeature: function(feature, layer) {
//         console.log(layer);
//     //     layer.bindPopup("<h3>"+"Airport Code:" + feature.properties.faa + "</h>");
//     //    }
//         layer.bindPopup("<p><h3>"+"Airport Code:" + feature.properties.faa + "</h3><hr><h3>"+"Airport Name:" + feature.properties.name + "</h3></p>")
//        }
//     }).addTo(map);

   
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);



// Map Multiple GeoJSON Points
    // Accessing the airport GeoJSON URL
    let airportData = "https://raw.githubusercontent.com/zaatrim/Mapping_Earthquakes/main/majorAirports.json";

    // Grabbing our GeoJSON data.
    d3.json(airportData).then(function(data) {
        console.log(data);
    // // Creating a GeoJSON layer with the retrieved data.
    // L.geoJson(data).addTo(map);
    // });
    //  The onEachFeature Function
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<p><h3>"+"Airport Code:" + feature.properties.faa + "</h3><hr><h3>"+"Airport Name:" + feature.properties.name + "</h3></p>")
        }
        }).addTo(map);

    });
// To change the map's style, change the map id using the list of Mapbox ids below:
//     mapbox/streets-v11
//     mapbox/outdoors-v11
//     mapbox/light-v10
//     mapbox/dark-v10
//     mapbox/satellite-v9
//     mapbox/satellite-streets-v11