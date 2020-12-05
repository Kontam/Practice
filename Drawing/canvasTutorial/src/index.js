
function drawRects(ctx) {
  ctx.fillStyle = 'rgb(200,0,0)'; 
  ctx.strokeRect(10,10,50,50);

  ctx.fillStyle = 'rgba(0,0,200,0.5)'; 
  ctx.fillRect(60,30,50,50);

  ctx.fillStyle = 'rgba(0,0,200,0.5)'; 
  ctx.clearRect(60,30,30,50);
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

}


(function() {
  window.addEventListener('load', onLoad);
})()
