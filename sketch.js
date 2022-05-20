let img;
let x;

function setup() {
  createCanvas(400, 400, WEBGL);
  img = loadImage('"C:\Users\ahata\OneDrive\デスクトップ\IB VA\New media\New Media Born background.png"');
  x = 0;
}

function draw() {
  image(img, 0, 0);
  
  orbitControl();
  
  
  rotateX(millis() / 7000);
  rotateY(millis() / 7000);
  rotateZ(millis() / 7000);
  
  
  x = x + 1;
  if(x > 255) {
    x = 255;
  }
  
  noStroke();
  fill(x);
  push();
  translate(0, 0);
  sphere(300);
  pop();
  
  stroke(255);
  strokeWeight(0.5);
  
  fill(255, 255, 0);
  translate(100, -80);
  sphere(300);
  
  fill(255, 255, 152);
  translate(250, 100);
  sphere(200);
  
  rotateX(millis() / 5000);
  rotateY(millis() / 5000);
  rotateZ(millis() / 5000);
  
  fill(255, 51, 51);
  translate(-49, 150);
  sphere(220);
  
  fill(255, 204, 153);
  translate(180, 200);
  sphere(100);
  
  fill(255, 153, 255);
  translate(0, 50);
  sphere(220);
  
  fill(204, 5, 5);
  translate(100, 300);
  sphere(100);
  
  fill(255, 255, 102);
  translate(200, 350);
  sphere(150);
  
  rotateX(millis() / 1000);
  rotateY(millis() / 1000);
  rotateZ(millis() / 1000);
  
  fill(255, 153, 51);
  translate(200, 100);
  sphere(100);
  
  fill(255, 215, 0);
  translate(0, 300);
  sphere(300);
  
  fill(250, 237, 56);
  translate(70, 20);
  sphere(50);
  
  fill(255, 102, 178);
  translate(80, 290);
  sphere(30);
  
  fill(204, 0, 102);
  translate(0, 300);
  sphere(100);
  
  fill(56, 245, 232);
  translate(200, 200);
  sphere(160);
  
  fill(255, 153, 51);
  translate(190, 300);
  sphere(60);  
  
  fill(255, 204, 153);
  translate(120, 260);
  sphere(80);
  
  rotateX(millis() / 1000);
  rotateY(millis() / 1000);
  rotateZ(millis() / 1000);
  
  fill(0, 255, 0);
  translate(340, 380);
  sphere(200);
  
  fill(255, 153, 51);
  translate(350, 300);
  sphere(300);
  
  fill(255, 204, 204);
  translate(0, 0);
  sphere(50);
  
  fill(255, 102, 102);
  translate(180, 200);
  sphere(100);
  
  fill(255, 255, 0);
  translate(180, 200);
  sphere(100);
  
  fill(255, 4, 4);
  translate(100, -80);
  sphere(300);
  
}