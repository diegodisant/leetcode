type ValueIndexesMap = Map<number, number[]>;

export const twoSum = (nums: number[], target: number): number[] => {
  let searchNumber = 0;
  let searchedIndexes: number[] | undefined = [];
  const foundIndexes: number[] = [];

  const numsMap = buildMap(nums, target);

  for (const [currentNumber, indexes] of numsMap) {
    if (currentNumber > target) {
      continue;
    }

    if (isExactMultiplier(target, currentNumber, indexes)) {
      return indexes;
    }

    searchNumber = target - currentNumber;

    searchedIndexes = numsMap.get(searchNumber);

    if (searchedIndexes === undefined) {
      continue;
    }

    foundIndexes.push(indexes[0]);
    foundIndexes.push(searchedIndexes[0]);

    break;
  }

  return foundIndexes;
};

const isExactMultiplier = (target: number, currentNumber: number, indexes: number[]): boolean => {
  return (
    target >= currentNumber &&
    target % currentNumber == 0 &&
    Math.trunc(target / currentNumber) === indexes.length
  );
};

const buildMap = (nums: number[], target: number): ValueIndexesMap => {
  let currentNumber: number = 0;
  const valueIndexMap: ValueIndexesMap = new Map<number, number[]>();

  for (let numIndex = 0; numIndex < nums.length; numIndex += 1) {
    currentNumber = nums[numIndex];

    if (currentNumber > target) {
      continue;
    }

    const indexes = valueIndexMap.get(currentNumber);

    if (indexes === undefined) {
      valueIndexMap.set(currentNumber, [numIndex]);

      continue;
    }

    indexes.push(numIndex);

    valueIndexMap.set(currentNumber, indexes);
  }

  return valueIndexMap;
};
