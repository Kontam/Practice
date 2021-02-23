import React from 'react';
import styles from './style.module.css';

const Button: React.FC = (props) => {
  console.log(styles);
  return (
    <button className={styles.button} type="button">{props.children}</button>
  )
}

export default Button;
