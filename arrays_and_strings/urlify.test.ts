import { urlify, urlify1 } from "./urlify";

describe('urlify implementation using true length', () => {
  test('should work as expected', () => {
    expect(urlify('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith');
    expect(urlify('a b    ', 3)).toBe('a%20b');
    expect(urlify('abcde', 5)).toBe('abcde');
  });
})

describe('urlify implementation using built-ins', () => {
  test('should return false for strings that are not permutations', () => {
    expect(urlify1('Mr John Smith    ')).toBe('Mr%20John%20Smith');
    expect(urlify1('a b')).toBe('a%20b');
    expect(urlify1('abcde')).toBe('abcde');
    expect(urlify1('  abcde')).toBe('abcde');
    expect(urlify1('  abcde    ')).toBe('abcde');
    expect(urlify1('  ab cde    ')).toBe('ab%20cde');
  });
})