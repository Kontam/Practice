import React from 'react';

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
    <ul>
      {groups.map(group => (
        <li>
          <h2>{group.groupName}</h2>
          <ul>
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
