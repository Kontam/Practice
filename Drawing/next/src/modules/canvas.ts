import { Application, Graphics } from 'pixi.js';

type Position = { x:number | null, y:number | null };

export class DrawingCanvas{
  PIXI: any;
  canvas: Application;
  currentLine: Graphics;
  isDrawing: boolean;
  lastPosition: Position;
  constructor() {
    this.PIXI = require('pixi.js'); // importではSSR時にwindow is not foundになる
    const options = {
      width: 800,
      height: 800,
    };
    this.canvas = new this.PIXI.Application(options);
    this.lastPosition = { x:null, y:null }
  }

  startDraw() {
    this.currentLine = new this.PIXI.Graphics();
    this.currentLine.lineStyle(2, 0xffffff);
    this.isDrawing = true;
    this.canvas.stage.addChild(this.currentLine);
    this.canvas.render();
  }

  endDraw() {
    this.isDrawing = false;
    this.lastPosition = { x:null, y:null }
  }

  draw(x: number, y: number) {
    if (!this.isDrawing) return;
    
    if (this.lastPosition.x === null || this.lastPosition.y === null ) {
      this.currentLine.moveTo(x, y);
    } else {
      this.currentLine.moveTo(this.lastPosition.x, this.lastPosition.y);
    }

    this.currentLine.lineTo(x, y);

    this.lastPosition = { x, y };
  }
}
