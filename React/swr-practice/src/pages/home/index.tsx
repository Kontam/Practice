import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => (
  <div>
    <h1>This is Home page</h1>
    <Link href="axiosTodoList">
      <a>axiosTodoList</a>
    </Link>
  </div>
);

export default Home;
