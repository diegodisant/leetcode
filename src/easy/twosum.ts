type ValueIndexesMap = Map<number, number[]>

export const twoSum = (nums: number[], target: number): number[] => {
  let firstIndex = 0;
  let searchNumber = 0;
  let currentNumber = 0;
  let searchIndexes: number[] | undefined = []

  const numsSize = nums.length;
  const indexesMap: ValueIndexesMap = new Map<number, number[]>();

  for (
    let numIndex = 0;
    numIndex < numsSize;
    numIndex += 1
  ) {
    currentNumber = nums[numIndex];

    if (!indexesMap.has(currentNumber)) {
      indexesMap.set(currentNumber, [numIndex]);
    }

    searchNumber = target - currentNumber;

    searchIndexes = indexesMap.get(searchNumber);

    if (searchIndexes === undefined) {
      continue;
    }

    firstIndex = searchIndexes[0];

    if (firstIndex === numIndex) {
      continue;
    }

    return [firstIndex, numIndex];
  }

  return [-1, -1];
};
