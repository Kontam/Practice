import React, {useEffect} from 'react';
import {appConst} from '../../modules/appConst';
import axios, {apiKey} from '../../modules/axiosConfig';

export const TodoList: React.FC = () => {
  console.log(appConst);
useEffect(() => {
  axios
    .get('/longoAPI')
    .then(result => {
      console.log('axios', result);
    })
    .catch(e => console.error(e));
  }, [])

  return <div>TodoList</div>;
};

export default TodoList;
