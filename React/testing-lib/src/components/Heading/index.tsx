import React from 'react';
import styles from './style.module.css';

type Props = {
  text: string;
};

const Heading: React.VFC<Props> = ({text}) => (
  <h1 className={styles.root}>{text}</h1>
);

export default Heading;
