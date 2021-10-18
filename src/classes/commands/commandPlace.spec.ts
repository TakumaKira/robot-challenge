import { INVALID_COMMAND_MESSAGE, INVALID_POSITION_MESSAGE, TABLE_DEPTH, TABLE_WIDTH } from '../../config.json';
import FaceType from '../../constants/faceType';
import CommandPlace from './commandPlace';

describe('CommandPlace', () => {
  test(`should not throw if given valid argStr`, () => {
    expect(() => {new CommandPlace(`${0}, ${0}, ${FaceType.NORTH}`);}).not.toThrow();
    expect(() => {new CommandPlace(`${TABLE_WIDTH - 1}, ${TABLE_DEPTH - 1}, ${FaceType.NORTH}`);}).not.toThrow();
  });
  test(`should throw if given invalid argStr`, () => {
    expect(() => {new CommandPlace(``);}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
    expect(() => {new CommandPlace(`${0}, ${0}, ${0}, ${FaceType.NORTH}`);}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
    expect(() => {new CommandPlace(`${0}, , ${FaceType.NORTH}`);}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
    expect(() => {new CommandPlace(`${'A'}, ${0}, ${FaceType.NORTH}`);}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
    expect(() => {new CommandPlace(`${0}, ${'A'}, ${FaceType.NORTH}`);}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
    expect(() => {new CommandPlace(`${0}, ${0}, ${'A'}`);}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
    expect(() => {new CommandPlace(`${TABLE_WIDTH}, ${0}, ${FaceType.NORTH}`);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
    expect(() => {new CommandPlace(`${0}, ${TABLE_DEPTH}, ${FaceType.NORTH}`);}).toThrow(new Error(INVALID_POSITION_MESSAGE));
  });
});