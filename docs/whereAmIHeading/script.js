/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
var options = {
  enableHighAccuracy: true,
  timeout: 5000, //5 seconds
  maximumAge: 0 //integer (milliseconds]) - amount of time before the error callback is invoked, if 0 it will never invoke.
};

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
// button logic: https://www.w3schools.com/html/html5_geolocation.asp
var output = document.getElementById("out");

function getLocation() {
  if (navigator.geolocation) {
    //navigator.geolocation.getCurrentPosition(success, error, options);
    navigator.geolocation.watchPosition(success, error, options);
  } else {
    output.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  //https://developer.mozilla.org/en-US/docs/Web/API/Coordinates
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;
  var speed = position.coords.speed;
  var heading = position.coords.heading;
  var accuracy = position.coords.accuracy;
  var altitude = position.coords.altitude;
  var altitudeAccuracy = position.coords.altitudeAccuracy;

  output.innerHTML = '<p>Latitude is ' + latitude 
    + '° <br>Longitude is ' + longitude + '°' 
    + '<br>Speed is ' + speed
    + '<br>Heading is ' + heading
    + '<br>Accuracy is ' + accuracy
    + '<br>Altitude is ' + altitude
    + '<br>Altitude accuracy is ' + altitudeAccuracy    
    + '</p>';

  //var img = new Image();
  //img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

  //output.appendChild(img);
  //https://developers.google.com/maps/documentation/maps-static/get-api-key#get-an-api-key
}

function error() {
  output.innerHTML = "Unable to retrieve your location";
}