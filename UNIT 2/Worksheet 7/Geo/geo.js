
/*
The **geolocation API** allows the user to provide their location to web applications if they so desire. For privacy reasons, 
the user is asked for permission to report location information.

The geolocation API is published through the `navigator.geolocation` object. If the object exists, geolocation services are available.
*/
    
/*
1. Develop a web app in which:
   1. Test if geolocation is available.
   2. If it's available, show the current position (latitude and longitude)
   3. If it isn't available, show a message for each and everyone of the possible errors.
   4. Improve your code so you show the position continuously (although the user could be in moving, so it could change)
   5. Find the way to meassure the distance traveled.
*/

// Current position
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  var crd
  function success(pos) {
    crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`)
    var platform = new H.service.Platform({
        'apikey': 'e51Pp4vt8fnBV0DJl-zSrR8XUOul3uqeDHa-BfHjBe4'
      });
    
      // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();
    
    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: { lat: crd.latitude, lng: crd.longitude }
        });;
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

/*
2. Let's try to use the geolocation information with the API of Here Maps.
   1. Use a map to show your location
   2. Draw a marker in your location
   3. Design a way to calculate and draw the route from my current location to a given place.
   4. Find a way to know the address of your location (reverse geocoding).
*/


// Create a map:
// var map = new H.Map(...);

// Define a variable holding SVG mark-up that defines an icon image:
var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';

// Create an icon, an object holding the latitude and longitude, and a marker:
// var icon = new H.map.Icon(svgMarkup),
//     coords = {crd.latitude, crd.longitude},
//     marker = new H.map.Marker(crd, {icon: icon});

// Add the marker to the map and center the map at the location of the marker:
map.addObject(marker);
map.setCenter(coords);


/*
3. Repeat exercise 3 using another maps library, like Google Maps, Leaflet,....
*/



/*
4. Complete exercise 2 with these new features:
   1. Look for the way to animate your marker
   2. Draw the position of the user correctly although it could be moving.
   3. Draw the route of the user over the map.
*/



