/*// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}


function stopVideo(){
    video.stop();
}



<div class="container" style="height: 100%; width: 100%;">
<video id="video" width="640" height="480" autoplay></video>
<button id="snap" onclick="stopVideo()">Snap Photo</button>
<canvas id="canvas" width="640" height="480"></canvas>
</div>
*/

let video;
let buttonRed;
let buttonYellow;
let R = 0;
let G = 0;
let B = 0;
let canvas1;
let canvas2;
function setup(){

    video = createCapture(VIDEO);
    video.size(320,240);
    createCanvas(320,240);
    background(51);
    buttonRed = createButton('RED');
    buttonYellow = createButton('YELLOW');
    buttonRed.mousePressed(filtro);
    buttonRed.position(100,100)
    buttonYellow.mousePressed(filtro2);
    buttonYellow.position(160,100)
}

function draw(){
    tint(R,G,B)
    image(video, 0, 0, width, width * video.height / video.width);
}


function off(){
    video = null;
}

function filtro(){
    R = 255;
}

function filtro2(){
    R = 100;
}