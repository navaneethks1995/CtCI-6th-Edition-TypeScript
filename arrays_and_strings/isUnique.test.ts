import {isUniqueSet, isUnique_bitwise} from "./isUnique";

describe('isUnique implementation using set', () => {
  test('should return true for non repeating character strings', () => {
    expect(isUniqueSet('abcd')).toBe(true);
    expect(isUniqueSet('aAbB')).toBe(true);
    expect(isUniqueSet('')).toBe(true);
  })
  
  test('should return false for repeating character strings', () => {
    expect(isUniqueSet('abcda')).toBe(false);
    expect(isUniqueSet('aaaaaaaaa')).toBe(false);
  })
})

describe('isUnique implementation using bitwise manipulation', () => {
  test('should return true for non repeating character strings', () => {
    expect(isUnique_bitwise('abcd')).toBe(true);
    expect(isUnique_bitwise('')).toBe(true);
  })
  
  test('should return false for repeating character strings', () => {
    expect(isUnique_bitwise('abcda')).toBe(false);
    expect(isUnique_bitwise('aaaaaaaaa')).toBe(false);
  })
})