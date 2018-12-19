var latitude;
var longitude;

function setup(){
	createCanvas(windowWidth,windowHeight); //make a fullscreen canvas, thanks to: http://codepen.io/grayfuse/pen/wKqLGL
	textSize(32);
  intervalCurrentPosition(positionPing, 1000);
}

function draw() {
	background(255); //white background
	text('Latitude: '+latitude, 10, 42);
	text('Longitude: '+longitude, 10, 84);
}

function positionPing(position){
    //print("lat: " + position.latitude);
    latitude = position.latitude;
    //print("long: " + position.longitude);
    longitude = position.longitude;
}