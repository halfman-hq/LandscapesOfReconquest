var target;
var you;
var distance = "an unknown number of"
var helperText = "Freezing!";

function setup(){
	createCanvas(windowWidth,windowHeight); //make a fullscreen canvas, thanks to: http://codepen.io/grayfuse/pen/wKqLGL
	textSize(32);
  intervalCurrentPosition(positionPing, 1000);
  
  //https://en.wikipedia.org/wiki/Latitude
  //long then lat, to correspond to x and y
  target = createVector(-0.125182, 51.535514); //Granary Square Kings Cross
  //https://www.google.co.uk/maps/place/51%C2%B032'07.9%22N+0%C2%B007'30.7%22W/@51.5355173,-0.1273653,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d51.5355138!4d-0.1251816
  you = createVector();
  distance = 0.0;
}

function draw() {
	background(255); //white background
  text('Find the target.', 10, 42);
  text('At the moment you are: '+helperText, 10, 84);
	text('You are '+distance+' metres away.', 10, 84+42);
}

function positionPing(position){
  you.set(position.longitude, position.latitude);
  //print("long: " + position.longitude + "lat: " + position.latitude);
  //https://github.com/bmoren/p5.geolocation#calcgeodistance
  //calcGeoDistance(lat1, lon1, lat2, lon2, units)
  distance = calcGeoDistance(you.y, you.x, target.y, target.x, 'km');
  distance = distance * 1000; //convert to metres
  
  if (distance < 1) {
      helperText = "Disco!";
  } else if (distance < 5) {
      helperText = "Boiling....";
  } else if (distance < 10) {
      helperText = "Hot...";
  } else if (distance < 20) {
      helperText = "Warmer..";
  } else if (distance < 30) {
      helperText = "Warm.";
  } else if (distance < 40) {
      helperText = "Cold.";    
  } else {
      helperText = "Freezing!";
  }
}