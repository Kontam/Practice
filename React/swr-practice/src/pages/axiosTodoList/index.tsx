import React, {useEffect, useState} from 'react';
import axios from '../../modules/axiosConfig';
import ListBody, {Group} from '../../components/ListBody';

export const TodoList: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  useEffect(() => {
    axios
      .get('/choiceGroupAPI')
      .then(result => {
        setGroups(result.data);
      })
      .catch(e => console.error(e));
    }, [])

  return (
    <div>
      TodoList
      <ListBody groups={groups} />
    </div>
  );
};

export default TodoList;
