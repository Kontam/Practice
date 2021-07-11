import glob from 'glob';

export type Data = {
  hash: string;
  date: string;
};

export type DataSet = {
  name: string;
  data: Data[];
};

export function getDataSet() {
  const result = glob.sync('**/static/**/*.json');

  const pattern = /static\/data\/(.*)\/(.*)_(.*)\.json/;

  const datasets: DataSet[] = [];
  result.forEach((path) => {
    const match = path.match(pattern);
    if (!datasets.some((data) => data.name === match[1])) {
      datasets.push({
        name: match[1],
        data: [{ hash: match[2], date: match[3] }],
      });
      return;
    }
    datasets
      .find((set) => set.name === match[1])
      .data.push({ hash: match[2], date: match[3] });
  });

  return datasets;
}
