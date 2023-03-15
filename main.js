img=" "
status=" "
object= []
function setup()
{
canvas=createCanvas(640, 420);
canvas.center();
objectdetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML= "Status : Detecting Object";
}

function modelLoaded()
{
    console.log("ModelLoaded");
status = true;
objectdetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        object= results;
    }
}

function preload()
{
img=loadImage("dog_cat.jpg");
}

function draw()
{
image(img, 0, 0, 640, 420);

if (status!=" ") {
    for (i=0; i<object.length; i++){
        document.getElementById("status").innerHTML= "Status : Object Detected";
        fill("#FF0027");
        percent= floor(object[i].confidence * 100);
        text(object[i].label + " " + percent+"%", object[i].x+10, object[i].y+10);
        noFill();
        stroke("red");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
}
}


