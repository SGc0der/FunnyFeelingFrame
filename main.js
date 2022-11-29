function takeSnapshot(){
    save("Photo.png");
}
function setup() {
    canvas = createCanvas(800, 600);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 200, 45, 430, 155);
    stroke(7, 0, 255);
    fill(7, 0, 255);
    circle(200, 200, 80);
    circle(200, 45, 80);
    circle(630, 45, 80);
    circle(630, 200, 80);
    stroke(145, 0, 10);
    fill(145, 0, 10);
    rect(240, 180, 350, 35, 0);
    rect(240, 30, 350, 35, 0);
    rect(185, 84, 35, 75, 0);
    rect(610, 84, 35, 75, 0);
}