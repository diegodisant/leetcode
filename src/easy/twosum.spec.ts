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
    nums: [3, 3],
    target: 9,
    expected: [0, 1],
  },
];

describe('TwoSum', () => {
  it('cases', () => {
    let selectedIndexes: number[] = [];

    for (const data of dataProvider) {
      selectedIndexes = twoSum(data.nums, data.target);

      expect(selectedIndexes).toBe(data.expected);
    }
  });
});
