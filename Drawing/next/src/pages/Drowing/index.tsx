import React, { useRef, useEffect } from 'react';
import { createCanvas } from '../../modules/canvas';

const Drawing = () => {
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    myRef.current.appendChild(createCanvas().view)
  }, []);

  return (
    <div>
      <div ref={myRef}></div>
      <h1>Drowing</h1>
    </div>
  );
}

export default Drawing;