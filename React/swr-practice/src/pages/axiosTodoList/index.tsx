import React, {useEffect, useState} from 'react';
import axios from '../../modules/axiosConfig';
import ListBody, {Group} from '../../components/ListBody';
import Navigation from '../../components/Navigation';
import Heading from '../../components/Heading';

export const AxiosTodoList: React.FC = () => {
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
      <Navigation />
      <Heading text="AxiosTodoList" />
      <ListBody groups={groups} />
    </div>
  );
};

export default AxiosTodoList;
