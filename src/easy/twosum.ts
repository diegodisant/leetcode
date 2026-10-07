type ValueIndexesMap = Map<number, number[]>;

export const twoSum = (nums: number[], target: number): number[] => {
  let searchNumber = 0;
  let searchedIndexes: number[] | undefined = [];
  const foundIndexes: number[] = [];

  const numsMap = buildMap(nums);

  for (const [currentNumber, indexes] of numsMap) {
    if (isExactMultiplier(target, currentNumber, indexes)) {
      return indexes;
    }

    searchNumber = target - currentNumber;

    if (searchNumber === currentNumber) {
      continue
    }

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
  if (indexes.length < 2) {
    return false;
  }

  const multipliers = indexes.length
  const multipliedNumber = currentNumber * multipliers

  if (multipliedNumber === target) {
    return true
  }

  return false
};

const buildMap = (nums: number[]): ValueIndexesMap => {
  let currentNumber: number = 0;
  const valueIndexMap: ValueIndexesMap = new Map<number, number[]>();

  for (let numIndex = 0; numIndex < nums.length; numIndex += 1) {
    currentNumber = nums[numIndex];

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
