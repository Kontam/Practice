import React from 'react';
import { NextPage } from 'next';
import Header from '../components/organisms/Header';

const Index: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>home</h1>
        <p>This is index.tsx</p>
      </div>
    </div>
  );
};
export default Index;
