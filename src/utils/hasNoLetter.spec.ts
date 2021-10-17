import hasNoLetter from "./hasNoLetter";

describe('hasNoLetter', () => {
  test(`should return false if input has no string other than spaces`, () => {
    expect(hasNoLetter('')).toBe(true);
    expect(hasNoLetter(' ')).toBe(true);
    expect(hasNoLetter('  ')).toBe(true);
  });
  test(`should return false if input has any string other than spaces`, () => {
    expect(hasNoLetter('A')).toBe(false);
    expect(hasNoLetter(' A')).toBe(false);
    expect(hasNoLetter('A ')).toBe(false);
    expect(hasNoLetter(' A ')).toBe(false);
    expect(hasNoLetter('`')).toBe(false);
  });
});