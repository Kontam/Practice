import { getDataSet } from '../../../util/getDataSet';

export function useGraph() {
  const dataset = getDataSet();

  const graphs = dataset.map((data) => ({
    labels: [...data.data.map((d) => d.hash)],
    datasets: [
      {
        label: [...data.data.map((d) => d.date)],
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }));

  return graphs;
}
