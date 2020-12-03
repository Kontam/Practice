import React, { useRef, useEffect } from 'react';
import { DrawingCanvas } from '../../modules/canvas';

const Drawing = () => {
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const canvas = new DrawingCanvas();
    console.log('useEffect', canvas);
    myRef.current.appendChild(canvas.canvas.view)
    canvas.canvas.view.addEventListener('mousedown', () => { canvas.startDraw() });
    canvas.canvas.view.addEventListener('mouseup', () => { canvas.endDraw() });
    canvas.canvas.view.addEventListener('mouseout', () => { canvas.endDraw() });
    canvas.canvas.view.addEventListener('mousemove', (e) => {
      canvas.draw(e.layerX, e.layerY)
    });
  }, []);

  return (
    <div>
      <div ref={myRef}></div>
      <h1>Drowing</h1>
    </div>
  );
}

export default Drawing;
