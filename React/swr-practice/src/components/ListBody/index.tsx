import React from 'react';
import styles from './style.module.css';

export type Option = {
  choiceName: string;
  choiceEnabled: boolean;
  choiceId: string;
};

export type Group = {
  groupId: string;
  groupName: string;
  choiceOptions: Option[];
};

type Props = {
  groups: Group[];
};

const ListBody: React.FC<Props> = ({groups}) => (
  <div>
    <ul className={styles.list}>
      {groups.map(group => (
        <li className={styles.item}>
          <h2 className={styles.groupName}>{group.groupName}</h2>
          <ul className={styles.optionList}>
            {group.choiceOptions.map(item => (
              <li>
                <p>{item.choiceName}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default ListBody;
