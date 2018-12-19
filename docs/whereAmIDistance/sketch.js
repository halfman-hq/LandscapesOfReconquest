var me;
var you;
var distance;

function setup(){
	createCanvas(windowWidth,windowHeight); //make a fullscreen canvas, thanks to: http://codepen.io/grayfuse/pen/wKqLGL
	textSize(32);
  intervalCurrentPosition(positionPing, 1000);
  
  //https://en.wikipedia.org/wiki/Latitude
  //long then lat, to correspond to x and y
  me = createVector(0.0016102, 51.6060654 ); 
  you = createVector(0.0016102, 51.6060654 );
  distance = 0.0;
}

function draw() {
	background(255); //white background
  text('You are '+distance*1000+' metres away.', 10, 42);
	text('Your current position is: Longitude:'+you.x+', Latitude:'+you.y, 10, 84);
  text('My position is: Longitude:'+me.x+', Latitude:'+me.y, 10, 124);
	
}

function positionPing(position){
  you.set(position.longitude, position.latitude);
  //print("long: " + position.longitude + "lat: " + position.latitude);
  //https://github.com/bmoren/p5.geolocation#calcgeodistance
  //calcGeoDistance(lat1, lon1, lat2, lon2, units)
  distance = calcGeoDistance(you.y, you.x, me.y, me.x, 'km');
}