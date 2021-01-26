import React from 'react';
import { Todo } from '../../server/todoController';
import styles from './style.module.css';

type Props = {
  todos: Todo[];
};

const ListBody: React.FC<Props> = ({todos}) => (
  <div>
    <ul className={styles.list}>
      {todos.map(group => (
        <li className={styles.item}>
          <h2 className={styles.groupName}>{group.name}</h2>
        </li>
      ))}
    </ul>
  </div>
);

export default ListBody;
