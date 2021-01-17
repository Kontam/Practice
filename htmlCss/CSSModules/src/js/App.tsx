import React from 'react';
import reactDOM from 'react-dom';
import { VanilaBox } from './VanilaBox';
import ReactBox from './ReactBox';

const vanilabox = new VanilaBox('.vanilaboxRoot');
vanilabox.render();

const reactRoot = document.querySelector('.reactboxRoot');
reactDOM.render(<ReactBox />, reactRoot);
