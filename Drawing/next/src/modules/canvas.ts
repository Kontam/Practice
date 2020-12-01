import { Application } from 'pixi.js';

export function createCanvas() {
  const PIXI = require('pixi.js'); // importではSSR時にwindow is not foundになる
  const options = {
    width: 800,
    height: 800,
  };
  const canvas: Application = new PIXI.Application(options);


  const line = new PIXI.Graphics();
  line.lineStyle(2, 666).lineTo(100,100);
  canvas.stage.addChild(line);
  canvas.render();
  return canvas;
};
