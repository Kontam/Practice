import React, { useRef, useEffect } from 'react';
import { DrawingCanvas } from '../../modules/canvas';

const Drawing = () => {
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const canvas = new DrawingCanvas();
    myRef.current.appendChild(canvas.canvas.view)
    canvas.startDraw();
    canvas.endDraw();
  }, []);

  return (
    <div>
      <div ref={myRef}></div>
      <h1>Drowing</h1>
    </div>
  );
}

export default Drawing;
