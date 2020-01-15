var s;
var scl = 20;
var food;

function setup() {
  createCanvas(600, 600);
  s = new Snike();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  if(s.eat(food)){
    pickLocation();
  };

  s.death()
  s.update();
  s.show();


  fill(255,127,63)
  rect(food.x,food.y,scl,scl)

}

function keyPressed() {
    if (keyCode === 37) {
      s.dir(-1,0)
    } else if (keyCode === 38) {
        s.dir(0,-1)
    } else if (keyCode === 39) {
        s.dir(1,0)
    } else if (keyCode === 40) {
        s.dir(0,1)
    }
}


