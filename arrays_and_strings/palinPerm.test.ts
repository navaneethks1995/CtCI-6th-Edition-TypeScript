import { palinPerm } from "./palinPerm";

describe('palinPerm function', () => {
  test('should return true for all input with atleast one palindromic permutation', () => {
    expect(palinPerm('Tact Coa')).toBe(true);
    expect(palinPerm('aaaab')).toBe(true);
  });
  test('should return false for all input without palindromic permutation', () => {
    expect(palinPerm('Tabt Coa')).toBe(false);
    expect(palinPerm('aaab')).toBe(false);
  });
});