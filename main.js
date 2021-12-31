leftWristX = 0;
rightWristX = 0;
noseX = 0;
noseY  = 0;
difference = "";
function preload(){

}

function setup(){
video = createCapture(VIDEO);
video.size(400,350);

canvas = createCanvas(400, 350);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Intialized');
}
 
function draw(){
background('#7D95B9');
textSize(difference);
document.getElementById("font_size").innerHTML = difference  + "px";
fill("#f2eae1");
text('Font Manipulator', noseX, noseY);
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.y;
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    difference = floor(leftWristX - rightWristX);
  
}
}