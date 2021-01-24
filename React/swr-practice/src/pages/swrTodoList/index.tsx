import React from 'react';
import useSWR from 'swr';
import ListBody, {Group} from '../../components/ListBody';
import {appConst} from '../../modules/appConst';
import Navigation from '../../components/Navigation';
import Heading from '../../components/Heading';

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json());

export const SwrTodoList: React.FC = () => {
  const {data, error} = useSWR<Group[]>(
    appConst.NEXT_PUBLIC_BACKEND_BASE_URL + '/choiceGroupAPI',
    fetcher,
  );
  if (error) return <div>Error Occured!</div>;

  return (
    <div>
      <Navigation />
      <Heading text="SwrTodoList" />
      {data ? <ListBody groups={data} /> : <div>...loading</div>}
    </div>
  );
};

export default SwrTodoList;
