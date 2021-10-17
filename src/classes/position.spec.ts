import { INVALID_POSITION_MESSAGE, TABLE_SIZE } from '../config.json';
import FaceType from "../constants/faceType";
import Position from "./position";

describe('Position', () => {
  test(`should throw if given position is out of the table`, () => {
    expect(() => {new Position(-1, 0, FaceType.NORTH);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
    expect(() => {new Position(0, -1, FaceType.NORTH);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
    expect(() => {new Position(TABLE_SIZE, 0, FaceType.NORTH);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
    expect(() => {new Position(0, TABLE_SIZE, FaceType.NORTH);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
  });
});