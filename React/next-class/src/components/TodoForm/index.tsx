import React from 'react';
import styles from './TodoForm.module.css';

const TodoForm: React.FC = () => (
  <form className={styles.root}>
    <fieldset>
      <label className={styles.label}>name</label>
      <p className={styles.inputBlock}>
        <input type="text" name="name"></input>
      </p>
      <p className={styles.inputBlock}>
        <input className={styles.submit} type="submit" value="submit"></input>
      </p>
    </fieldset>
  </form>
);

export default TodoForm;
