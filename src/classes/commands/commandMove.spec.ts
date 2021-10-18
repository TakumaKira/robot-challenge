import { TABLE_WIDTH, TABLE_DEPTH } from '../../config.json';
import FaceType from '../../constants/faceType';
import Position from '../position';
import CommandMove from './commandMove';

describe('CommandMove', () => {
  test(`should not move if the next position will be out of the table`, () => {
    expect(new CommandMove('').execute(new Position(0, 0, FaceType.SOUTH))).toEqual(new Position(0, 0, FaceType.SOUTH));
    expect(new CommandMove('').execute(new Position(0, 0, FaceType.WEST))).toEqual(new Position(0, 0, FaceType.WEST));
    expect(new CommandMove('').execute(new Position(TABLE_WIDTH - 1, 0, FaceType.EAST))).toEqual(new Position(TABLE_WIDTH - 1, 0, FaceType.EAST));
    expect(new CommandMove('').execute(new Position(0, TABLE_DEPTH - 1, FaceType.NORTH))).toEqual(new Position(0, TABLE_DEPTH - 1, FaceType.NORTH));
  });
  test(`execute method should not throw with every valid FaceType`, () => {
    for (const t of Object.values(FaceType)) {
      expect(() => {new CommandMove('').execute(new Position(0, 0, t));}).not.toThrow();
    }
  });
  test(`execute method should throw with invalid FaceType`, () => {
    expect(() => {new CommandMove('').execute(new Position(0, 0, 'A' as FaceType));}).toThrow();
  });
});