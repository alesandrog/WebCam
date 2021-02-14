// Entornos
let video;
let canvas1;
let canvas2;
let imagen;
let sinFiltro;

// Variables
let R = 0;
let G = 0;
let B = 0;
let showFilter = false;
let imageFlag = true;

// Botones
let buttonRed;
let buttonYellow;
let calamardo;

function setup() {
  // Init video
  video = createCapture(VIDEO);
  video.size(320, 240);
  canvas1 = createCanvas(320, 240);
  canvas1.parent("filterContainer");
  video.parent("videoContainer");
  background(51);

  // Button definition
  sinFiltro = createButton("Normal");
  buttonRed = createButton("Rojo");
  buttonYellow = createButton("Sephia");
  calamardo = createButton("Calamardo");
  // Button actions
  sinFiltro.mousePressed(normal);
  buttonRed.mousePressed(rojo);
  buttonYellow.mousePressed(sephia);
  calamardo.mousePressed(filtroCalamardo);
  // Button containers
  sinFiltro.parent("buttonContainer");
  buttonRed.parent("buttonContainer");
  buttonYellow.parent("buttonContainer");
  calamardo.parent("buttonContainer");
}

function draw() {
  if (showFilter) {
    tint(R, G, B);
  }else{
    tint(255,255,255)
  }
  image(video, 0, 0, width, (width * video.height) / video.width);
  if (imagen != null && imagen != undefined && imageFlag == true) {
    imagen.remove();
  }
}

function rojo() {
  showFilter = true;
  imageFlag = true;
  R = 255;
  G = 0;
  B = 0;
}

function sephia() {
  showFilter = true;
  imageFlag = true;
  R = 223;
  G = 195;
  B = 94;
}

function filtroCalamardo() {
  showFilter = false;
  imageFlag = false;
  imagen = createImg("img/calamardo.png", "the p5 magenta asterisk");
  imagen.parent("filterContainer");
}

function normal() {
  showFilter = false;
  imageFlag = true;
}
