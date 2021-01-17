export class VanilaBox {
  root: HTMLElement | null = null

  constructor(selector:string) {
    this.root = document.querySelector(selector);
  }

  render() {
    if (!this.root) return console.error('invalid root');
    const dom = document.createElement('div');  
    const message = document.createElement('p');
    message.innerText = 'VanilaBox';
    dom.className = 'vanilaBox';
    dom.appendChild(message);

    while (this.root.firstChild) this.root.removeChild
    this.root.appendChild(dom);
  }
}
