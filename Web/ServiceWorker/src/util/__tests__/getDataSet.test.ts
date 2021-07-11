import { DataSet, getDataSet } from '../getDataSet';
import glob from 'glob';

const mockData = [
  'static/data/home/4cb6cd2b902005fa9ee6f20c20f303a461ea891f_20210605-040751.json',
  'static/data/home/4cb6cd2b902005fa9ee6f20c20f303a461ea891f_20210605-040851.json',
  'static/data/start/4cb6cd2b902005fa9ee6f20c20f303a461ea891f_20210607-122102.json',
  'static/data/start/4cb6cd2b902005fa9ee6f20c20f303a461ea891f_20210605-040851.json',
  'static/data/start/4cb6cd2b902005fa9ee6f20c20f303a461ea891f_20210607-122102.json',
];
jest.mock('glob');

describe('getDataSet', () => {
  let result: DataSet[];
  describe('jsonファイルが存在する時', () => {
    beforeEach(() => {
      (glob.sync as any).mockReturnValue(mockData);
      result = getDataSet();
    });
    test('DataSetがnameの種類分だけ作成される', () => {
      expect(result.length).toBe(2);
    });

    test('homeのデータが２つ存在する', () => {
      expect(result.find((data) => data.name === 'home').data.length).toBe(2);
    });

    test('startのデータが３つ存在する', () => {
      expect(result.find((data) => data.name === 'start').data.length).toBe(3);
    });
  });
  describe('jsonファイルが存在しない時', () => {
    beforeEach(() => {
      (glob.sync as any).mockReturnValue([]);
      result = getDataSet();
    });
    test('空配列が返却される', () => {
      expect(result.length).toBe(0);
    });
  });
});
