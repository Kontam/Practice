import * as PIXI from 'pixi.js';

export function createCanvas() {
  let canvas = null
  if (window) {
    const options = {
      width: 800,
      height: 800,
      backgroundColor: 255,
    };

    canvas = new PIXI.Application(options);

    const line = new PIXI.Graphics();
    line.lineStyle(2, 666).lineTo(100,100);
    canvas.stage.addChild(line);
    canvas.render();
  }
  return canvas;
};
