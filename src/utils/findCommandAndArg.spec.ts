import findCommandAndArg from './findCommandAndArg';

describe('findFirstCommand', () => {
  test(`should return command and args if there is valid first command`, () => {
    expect(findCommandAndArg('COMMAND')).toEqual({ command: 'COMMAND', argStr: null });
    expect(findCommandAndArg('COMMAND  ')).toEqual({ command: 'COMMAND', argStr: null });
    expect(findCommandAndArg('  COMMAND')).toEqual({ command: 'COMMAND', argStr: null });
    expect(findCommandAndArg(' COMMAND ')).toEqual({ command: 'COMMAND', argStr: null });
    expect(findCommandAndArg('COMM AND')).toEqual({ command: 'COMM', argStr: 'AND' });
    expect(findCommandAndArg(' COMM AND ')).toEqual({ command: 'COMM', argStr: 'AND ' });
    expect(findCommandAndArg(' COMM  AND ')).toEqual({ command: 'COMM', argStr: ' AND ' });
    expect(findCommandAndArg(' COMM AN D ')).toEqual({ command: 'COMM', argStr: 'AN D ' });
  });
  test(`should return null if there is no valid first command`, () => {
    expect(findCommandAndArg('')).toEqual({ command: null, argStr: null });
    expect(findCommandAndArg(' ')).toEqual({ command: null, argStr: null });
  });
});