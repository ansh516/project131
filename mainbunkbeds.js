status2 = "";
img = "";
function preload() {
   img = loadImage('IMG-6306.jpg'); 
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);  
} 
function draw() {
    image(img, 0, 0, 640, 420);
    

    
    
}
function modelLoaded() {
 console.log("Model Loaded!");
  status2 = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}