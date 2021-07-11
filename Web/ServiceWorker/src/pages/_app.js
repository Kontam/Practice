import React from 'react';
import 'destyle.css';
import { initializeWorker } from '../util/worker';

function MyApp({ Component, pageProps }) {
  initializeWorker();
  return <Component {...pageProps} />;
}

export default MyApp;
