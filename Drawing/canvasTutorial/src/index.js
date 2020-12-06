
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


function onLoad() {
  const CANVAS_ID = 'mycanvas';
  const canvas = document.getElementById(CANVAS_ID);
  console.log(canvas);
  if (!canvas.getContext) {
    console.error('canvas is not supported');
    return;
  }
  const ctx = canvas.getContext('2d');
  drawFace(ctx);
  drawText(ctx);
  measure(ctx);

}


(function() {
  window.addEventListener('load', onLoad);
})()
