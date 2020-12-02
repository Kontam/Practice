import { Application, Graphics } from 'pixi.js';

export class DrawingCanvas{
  PIXI: any;
  canvas: Application;
  currentLine: Graphics;
  constructor() {
    this.PIXI = require('pixi.js'); // importではSSR時にwindow is not foundになる
    const options = {
      width: 800,
      height: 800,
    };
    this.canvas = new this.PIXI.Application(options);
  }

  startDraw() {
    this.currentLine = new this.PIXI.Graphics();
    this.currentLine.lineStyle(2, 0xffffff).lineTo(100,100);
  }

  endDraw() {
    this.canvas.stage.addChild(this.currentLine);
    this.canvas.render();
  }
}
