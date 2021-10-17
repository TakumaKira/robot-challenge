import CommandType from '../constants/commandType';
import getCommandType from './getCommandType';

describe('getCommandType', () => {
  test(`should return CommandType if get valid command`, () => {
    expect(getCommandType('PLACE')).toBe(CommandType.PLACE);
  });
  test(`should return null if get invalid command`, () => {
    expect(getCommandType('PLAC')).toBe(null);
  });
});