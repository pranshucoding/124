function setup(){
    video=createCapture(VIDEO);
    video.size(600,600)

    canvas=createCanvas(600,525);
    canvas.position(1250,300);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#4169e1')
}

function modelLoaded(){
    console.log("The PoseNet model is initialized")
}

function gotPoses(results){
    if(results.length>0){
        console.log("result is",results);
    }
}