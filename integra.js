var s;
var scl = 20;
var food;
let video;
let classifier;
let label = "Esperandooo ..."

function preload(){
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wLjiq8fW/model.json');
}

function setup() {
  createCanvas(640, 480);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
  s = new Snike();
  console.log("Carga Snike")
  frameRate(10);
  pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function classifyVideo() {
    classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  image(video, 0, 0);
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(255);
  text(label,width/2,height -16);
  if(s.eat(food)){
    pickLocation();
  };
  s.death()
  s.update();
  s.show();
  fill(255,127,63)
  rect(food.x,food.y,scl,scl)
}
  function gotResults(error, results){
    if(error){
        console.log("Se produjo un error");
        return;
    }
    label = results[0].label;
    classifyVideo();
    snakeContol()
    //console.log("===>",label);
}

function snakeContol() {
    alert("Control")
    if (label === 'Reposo') {
      s.dir(0,0)
    } else if (keyCode === 'Izquierda') {
        s.dir(0,-1)
    } else if (keyCode === 'Derecha') {
        s.dir(-1,0)
    }
  }
