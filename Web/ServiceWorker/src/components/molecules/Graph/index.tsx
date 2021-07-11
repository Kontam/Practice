import React from 'react';
import { Line } from 'react-chartjs-2';

type Props = {
  data: any;
};

const Graph: React.FC<Props> = (props) => {
  return <Line data={props.data} />;
};

export default Graph;
