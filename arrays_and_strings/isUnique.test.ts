import isUnique from "./isUnique";

test('should return true for non repeating character strings', () => {
  expect(isUnique('abcdefghij')).toBe(true);
})