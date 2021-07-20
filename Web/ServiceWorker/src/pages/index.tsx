import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/organisms/Header';
import momo from '../../public/images/momo.png';
import junco from '../../public/images/junco.png';

const Index: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>home</h1>
        <p>This is index.tsx</p>
        <button type="button">Push</button>
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ position: 'relative', height: 500, width: 500 }}>
            <Image src={momo} alt="momo" objectFit="contain" layout="fill" />
          </div>
          <div style={{ position: 'relative', height: 500, width: 500 }}>
            <Image src={junco} alt="junco" objectFit="contain" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
