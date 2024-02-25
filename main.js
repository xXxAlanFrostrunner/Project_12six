song1 = "";
song2 = "";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
canvas = createCanvas(500,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
video.size(500,500);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video , 0, 0, 498, 498);

    fill("red");
    stroke("red");
    circle(leftWristX, leftWristY, 25);
    circle(rightWristX, rightWristY, 25);
}

function modelLoaded() {
    console.log('PoseNet is initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
   
    }
}
