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
});