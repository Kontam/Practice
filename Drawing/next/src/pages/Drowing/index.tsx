import React, { useRef, useEffect } from 'react';
import { canvas } from '../../modules/canvas';

const Drawing = () => {
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    myRef.current.appendChild(canvas.view)
  }, []);

  return (
    <div>
      <div ref={myRef}></div>
      <h1>Drowing</h1>
    </div>
  );
}

export default Drawing;
