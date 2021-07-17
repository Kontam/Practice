import React from 'react';
import { initializeWorker } from '../util/worker';

function MyApp({ Component, pageProps }) {
  initializeWorker();
  return <Component {...pageProps} />;
}

export default MyApp;
