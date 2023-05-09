import isUnique from "./isUnique";

test('should return true for non repeating character strings', () => {
  expect(isUnique('abcdefghij')).toBe(true);
  expect(isUnique('')).toBe(true);
})

test('should return false for repeating character strings', () => {
  expect(isUnique('abcdbefghij')).toBe(false);
  expect(isUnique('aaaaaaaaa')).toBe(false);
})