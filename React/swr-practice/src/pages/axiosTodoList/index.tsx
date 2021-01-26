import React, {useEffect, useState} from 'react';
import axios from '../../modules/axiosConfig';
import ListBody from '../../components/ListBody';
import Navigation from '../../components/Navigation';
import Heading from '../../components/Heading';
import {Todo} from '../../server/todoController';

export const AxiosTodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    axios
      .get('/todo')
      .then(result => {
        setTodos(result.data);
      })
      .catch(e => console.error(e));
    }, [])

  return (
    <div>
      <Navigation />
      <Heading text="AxiosTodoList" />
      <ListBody todos={todos} />
    </div>
  );
};

export default AxiosTodoList;
