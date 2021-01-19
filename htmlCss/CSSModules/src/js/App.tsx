import React from 'react';
import reactDOM from 'react-dom';
import { VanilaBox } from './VanilaBox';
import ReactBox from './ReactBox';

const vanilabox = new VanilaBox('.vanilaboxRoot');
vanilabox.render();

const { worker } = require('../mocks/browser')
console.log(worker, 'workerY');
worker.start()

const reactRoot = document.querySelector('.reactboxRoot');
reactDOM.render(<ReactBox />, reactRoot);
