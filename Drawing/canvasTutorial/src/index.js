
function drawRects(ctx) {
  ctx.fillStyle = 'rgb(200,0,0)'; 
  ctx.strokeRect(10,10,50,50);

  ctx.fillStyle = 'rgba(0,0,200,0.5)'; 
  ctx.fillRect(60,30,50,50);

  ctx.fillStyle = 'rgba(0,0,200,0.5)'; 
  ctx.clearRect(60,30,30,50);
}

function drawingTriangles(ctx) {
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.lineTo(75, 50);
  ctx.stroke();
}

function drawFace(ctx) {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
  ctx.stroke();
}

function drawText(ctx) {
  ctx.font = '48px sans serif';
  ctx.strokeText('Hello', 10, 50);
}

function measure(ctx) {
  var text = ctx.measureText('nikonikonikoniko');
  console.log(text);
}

function transitionRotate(ctx) {
  ctx.save();
  ctx.fillStyle = '#0095DD';
  ctx.fillRect(30,30,50,50);
  ctx.rotate((Math.PI / 180) * 25);

  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(40,40,50,50);

  ctx.restore();
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(70,70,50,50);
}


function onLoad() {
  const CANVAS_ID = 'mycanvas';
  const canvas = document.getElementById(CANVAS_ID);
  console.log(canvas);
  if (!canvas.getContext) {
    console.error('canvas is not supported');
    return;
  }
  const ctx = canvas.getContext('2d');
  animate(ctx);
}

function animate() {
  const time = new Date();
  const CANVAS_ID = 'mycanvas';
  console.log(time.getMilliseconds() % 100);
  const ctx = document.getElementById(CANVAS_ID).getContext('2d');
  ctx.clearRect(0, 0, 500, 500); // clear canvas
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, 40, time.getMilliseconds() % 500);
  ctx.fillStyle = 'rgb(0,120,0)';
  ctx.fillRect(40, 0, 40, (time.getMilliseconds() + 100) % 500);
  window.requestAnimationFrame(animate);
}


(function() {
  window.addEventListener('load', onLoad);
})()
