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
});