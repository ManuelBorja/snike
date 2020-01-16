// Add some header info
// For TM template code

// Video
let video;
let classifier;
let label = "Esperando ===>..."

// STEP 1: Load the model!
function preload(){
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wLjiq8fW/model.json');
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify!
function classifyVideo() {
    classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(255);
  text(label,width/2,height -16);
}
  function gotResults(error, results){
    if(error){
        console.log("Se produjo un error");
        return;
    }
    label = results[0].label;
    console.log(label);
    classifyVideo();
}


// STEP 3: Get the classification!
