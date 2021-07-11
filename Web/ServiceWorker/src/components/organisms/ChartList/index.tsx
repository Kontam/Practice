import React from 'react';
import Graph from '../../molecules/Graph';
import { useGraph } from './useGraph';

const ChartList: React.FC = () => {
  //const dataSets = useGraph();
  const dataSets = [];
  return (
    <div>
      <Graph data={dataSets[0]} />
    </div>
  );
};

export default ChartList;
