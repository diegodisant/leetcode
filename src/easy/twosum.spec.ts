import { type DataProvider } from '@/common/types/DataProvider';
import { twoSum } from '@/easy/twosum';

type TestData = {
  nums: number[];
  target: number;
  expected: number[];
};

type TwoSumDataProviderType = DataProvider<TestData>;

const dataProvider: TwoSumDataProviderType = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1],
  },
  {
    nums: [3, 2, 4],
    target: 6,
    expected: [1, 2],
  },
  {
    nums: [3, 6],
    target: 9,
    expected: [0, 1],
  },
  {
    nums: [0, 4, 3, 0],
    target: 0,
    expected: [0, 3],
  },
  {
    nums: [-3, 4, 3, 90],
    target: 0,
    expected: [0, 2],
  },
  {
    nums: [-1, -2, -3, -4, -5],
    target: -8,
    expected: [2, 4],
  },
];

describe('TwoSum', () => {
  it('cases', () => {
    let selectedIndexes: number[] = [];

    for (const data of dataProvider) {
      selectedIndexes = twoSum(data.nums, data.target);

      expect(selectedIndexes).toStrictEqual(data.expected);
    }
  });
});
