import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const Navigation: React.FC = () => (
  <nav>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="home">
          <a>home</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="axiosTodoList">
          <a>about</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
