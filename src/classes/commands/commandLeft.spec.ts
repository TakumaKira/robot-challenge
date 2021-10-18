import { INVALID_COMMAND_MESSAGE } from '../../config.json';
import FaceType from '../../constants/faceType';
import Position from '../position';
import CommandLeft from './commandLeft';

describe('CommandLeft', () => {
  test(`should return new postion correctly`, () => {
    expect(new CommandLeft('').execute(new Position(0, 0, FaceType.NORTH))).toEqual(new Position(0, 0, FaceType.WEST));
    expect(new CommandLeft('').execute(new Position(0, 0, FaceType.WEST))).toEqual(new Position(0, 0, FaceType.SOUTH));
    expect(new CommandLeft('').execute(new Position(0, 0, FaceType.SOUTH))).toEqual(new Position(0, 0, FaceType.EAST));
    expect(new CommandLeft('').execute(new Position(0, 0, FaceType.EAST))).toEqual(new Position(0, 0, FaceType.NORTH));
  });
  test(`should throw if given non empty argStr`, () => {
    expect(() => {new CommandLeft('A')}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
  });
  test(`execute method should not throw with every valid FaceType`, () => {
    for (const t of Object.values(FaceType)) {
      expect(() => {new CommandLeft('').execute(new Position(0, 0, t));}).not.toThrow();
    }
  });
  test(`execute method should throw with invalid FaceType`, () => {
    expect(() => {new CommandLeft('').execute(new Position(0, 0, 'A' as FaceType));}).toThrow();
  });
});