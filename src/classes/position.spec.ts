import { INVALID_POSITION_MESSAGE, TABLE_SIZE } from '../config.json';
import FaceType from "../constants/faceType";
import formatOutput from '../functions/outputFormatter';
import Position from "./position";

describe('Position', () => {
  let position: Position;

  test(`should throw if given position is out of the table`, () => {
    expect(() => {new Position(-1, 0, FaceType.NORTH);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
    expect(() => {new Position(0, -1, FaceType.NORTH);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
    expect(() => {new Position(TABLE_SIZE, 0, FaceType.NORTH);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
    expect(() => {new Position(0, TABLE_SIZE, FaceType.NORTH);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
  });

  test(`should not move if the next position will be out of the table`, () => {
    position = new Position(0, 0, FaceType.SOUTH);
    position.move();
    expect(position.report()).toBe(`${formatOutput(0, 0, FaceType.SOUTH)}`);

    position = new Position(0, 0, FaceType.WEST);
    position.move();
    expect(position.report()).toBe(`${formatOutput(0, 0, FaceType.WEST)}`);

    position = new Position(TABLE_SIZE - 1, 0, FaceType.EAST);
    position.move();
    expect(position.report()).toBe(`${formatOutput(TABLE_SIZE - 1, 0, FaceType.EAST)}`);

    position = new Position(0, TABLE_SIZE - 1, FaceType.NORTH);
    position.move();
    expect(position.report()).toBe(`${formatOutput(0, TABLE_SIZE - 1, FaceType.NORTH)}`);
  });

  test(`should report the position correctly`, () => {
    const x = 1;
    const y = 1;
    position = new Position(x, y, FaceType.NORTH);
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.NORTH)}`);
    position.rotateL();
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.WEST)}`);
    position.rotateL();
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.SOUTH)}`);
    position.rotateL();
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.EAST)}`);
    position.rotateL();
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.NORTH)}`);
    position.rotateR();
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.EAST)}`);
    position.rotateR();
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.SOUTH)}`);
    position.rotateR();
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.WEST)}`);
    position.rotateR();
    expect(position.report()).toBe(`${formatOutput(x, y, FaceType.NORTH)}`);

    position = new Position(x, y, FaceType.NORTH);
    position.move();
    expect(position.report()).toBe(`${formatOutput(x, y + 1, FaceType.NORTH)}`);
    position = new Position(x, y, FaceType.WEST);
    position.move();
    expect(position.report()).toBe(`${formatOutput(x - 1, y, FaceType.WEST)}`);
    position = new Position(x, y, FaceType.SOUTH);
    position.move();
    expect(position.report()).toBe(`${formatOutput(x, y - 1, FaceType.SOUTH)}`);
    position = new Position(x, y, FaceType.EAST);
    position.move();
    expect(position.report()).toBe(`${formatOutput(x + 1, y, FaceType.EAST)}`);
  });
});