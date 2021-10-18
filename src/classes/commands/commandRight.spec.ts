import { INVALID_COMMAND_MESSAGE } from '../../config.json';
import FaceType from '../../constants/faceType';
import Position from '../position';
import CommandRight from './commandRight';

describe('CommandRight', () => {
  test(`should return new postion correctly`, () => {
    expect(new CommandRight('').execute(new Position(0, 0, FaceType.NORTH))).toEqual(new Position(0, 0, FaceType.EAST));
    expect(new CommandRight('').execute(new Position(0, 0, FaceType.EAST))).toEqual(new Position(0, 0, FaceType.SOUTH));
    expect(new CommandRight('').execute(new Position(0, 0, FaceType.SOUTH))).toEqual(new Position(0, 0, FaceType.WEST));
    expect(new CommandRight('').execute(new Position(0, 0, FaceType.WEST))).toEqual(new Position(0, 0, FaceType.NORTH));
  });
  test(`should throw if given non empty argStr`, () => {
    expect(() => {new CommandRight('A')}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
  });
  test(`execute method should not throw with every valid FaceType`, () => {
    for (const t of Object.values(FaceType)) {
      expect(() => {new CommandRight('').execute(new Position(0, 0, t));}).not.toThrow();
    }
  });
  test(`execute method should throw with invalid FaceType`, () => {
    expect(() => {new CommandRight('').execute(new Position(0, 0, 'A' as FaceType));}).toThrow();
  });
});