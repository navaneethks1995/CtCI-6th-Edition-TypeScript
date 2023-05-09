import { checkPermutationArray, checkPermutationMap } from "./checkPermutation";

describe('checkPermutation implementation using map', () => {
  test('should return false for strings that are not permutations', () => {
    expect(checkPermutationMap('abcde', 'abb')).toBe(false);
    expect(checkPermutationMap('abbcde', 'abcdef')).toBe(false);
    expect(checkPermutationMap('abcde', 'pqrst')).toBe(false);
  });
  test('should return true for strings that are permutations', () => {
    expect(checkPermutationMap('abcde', 'abcde')).toBe(true);
    expect(checkPermutationMap('abcde', 'edcba')).toBe(true);
    expect(checkPermutationMap('', '')).toBe(true);
  });
})

describe('checkPermutation implementation using array', () => {
  test('should return false for strings that are not permutations', () => {
    expect(checkPermutationArray('abcde', 'abb')).toBe(false);
    expect(checkPermutationArray('abbcde', 'abcdef')).toBe(false);
    expect(checkPermutationArray('abcde', 'pqrst')).toBe(false);
  });
  test('should return true for strings that are permutations', () => {
    expect(checkPermutationArray('abcde', 'abcde')).toBe(true);
    expect(checkPermutationArray('abcde', 'edcba')).toBe(true);
    expect(checkPermutationArray('', '')).toBe(true);
  });
})