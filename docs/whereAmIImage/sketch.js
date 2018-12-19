var fence;
var inside = false;

//polygon is around perimter of csm building
var polygon = [
    {lat: 51.537344, lon: -0.125112},  // top left  51.537344, -0.125112
    {lat: 51.537124, lon: -0.123653},  // top right 51.537124, -0.123653
    {lat: 51.535531, lon: -0.124337},  // bottom right, 51.535531, -0.124337
    {lat: 51.535758, lon: -0.125812},  // bottom left, 51.535758, -0.125812
];

function preload() {
 // preload() runs once
  hogwarts = loadImage('hogwarts.jpg');
  muggle = loadImage('muggle.jpg');
}

function setup(){
	createCanvas(windowWidth,windowHeight); //make a fullscreen canvas, thanks to: http://codepen.io/grayfuse/pen/wKqLGL
	textSize(32);
  
  //https://en.wikipedia.org/wiki/Latitude, latitude is a geographic coordinate that specifies the north–south position of a point on the Earth's surface.
  //long then lat, to correspond to x and y
  
    //optional options object for geoFencegeoFencePolygon
  //fence = new geoFenceCircle(polygon, insideTheFence, 'mi', fenceOptions)
  // fenceOptions = {
  //   enableHighAccuracy: false,
  //   timeout: 5000,
  //   maximumAge: 0
  // };

  fence = new geoFencePolygon(polygon, insideTheFence, outsideTheFence, 'km')
}

function draw() {
	background(127); //grey background
  
  if(inside){
    image(hogwarts, 0, 0);
  }else{
    image(muggle, 0, 0);
  }
    
}

function insideTheFence(position){
  print("INlat: " + position.latitude);
  print("INlong: " + position.longitude);
  print("user is inside of the fence");
  inside = true;
}

function outsideTheFence(position){
  print("OUTlat: " + position.latitude);
  print("OUTlong: " + position.longitude);
  print("user is outside of the fence");
  inside = false;
}