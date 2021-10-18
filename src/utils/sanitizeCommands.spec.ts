import sanitizeCommands from "./sanitizeCommands";

describe('sanitizeCommands', () => {
  test(`should return sanitized commands if all are sanitized correctly`, () => {
    expect(sanitizeCommands([' a ', ' b ', ' c '])).toEqual(['a', 'b', 'c']);
  });
  test(`should return null if anything is not sanitized correctly`, () => {
    expect(sanitizeCommands([' a A ', ' b ', ' c '])).toBe(null);
    expect(sanitizeCommands([' a ', ' ', ' c '])).toBe(null);
  });
});