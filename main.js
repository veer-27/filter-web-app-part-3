noseX = 0;
noseY = 0;

function preload() {
    muctase_nose = loadImage('https://i.postimg.cc/Kvhb6BhL/muctase-image.png');
}

function setup() 
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    pose = ml5.poseNet(video,Modelloaded);
    pose.on('pose',gotpose);
}

function gotpose(results) 
{
    if(results.length > 0)
    {
        console.log(results);
       noseX = results[0].pose.nose.x-15;
       noseY = results[0].pose.nose.y-2;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function Modelloaded() 
{
    console.log("PoseNet is iniTialized");
}

function draw()
{
 image(video,0,0,300,300);
  image(muctase_nose,noseX,noseY,35,35);
}

function takesnapshot() 
{
    save('You are a muctase.png');
}