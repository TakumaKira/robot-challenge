import findCommandAndArg from './findCommandAndArg';

describe('findFirstCommand', () => {
  test(`should return command and args if there is valid first command`, () => {
    expect(findCommandAndArg('COMMAND')).toEqual({ command: 'COMMAND', arg: null });
    expect(findCommandAndArg('COMMAND  ')).toEqual({ command: 'COMMAND', arg: null });
    expect(findCommandAndArg('  COMMAND')).toEqual({ command: 'COMMAND', arg: null });
    expect(findCommandAndArg(' COMMAND ')).toEqual({ command: 'COMMAND', arg: null });
    expect(findCommandAndArg('COMM AND')).toEqual({ command: 'COMM', arg: 'AND' });
    expect(findCommandAndArg(' COMM AND ')).toEqual({ command: 'COMM', arg: 'AND ' });
    expect(findCommandAndArg(' COMM  AND ')).toEqual({ command: 'COMM', arg: ' AND ' });
    expect(findCommandAndArg(' COMM AN D ')).toEqual({ command: 'COMM', arg: 'AN D ' });
  });
  test(`should return null if there is no valid first command`, () => {
    expect(findCommandAndArg('')).toEqual({ command: null, arg: null });
    expect(findCommandAndArg(' ')).toEqual({ command: null, arg: null });
  });
});