import CommandType from "../constants/commandType";
import FaceType from "../constants/faceType";
import Command from "./command";
import Position from "./position";

describe('Command', () => {
  test(`should throw if given or not given position parameter invalidly`, () => {
    expect(() => {new Command(CommandType.PLACE);}).toThrow(new Error(`${CommandType.PLACE} command must have place parameter.`));
    expect(() => {new Command(CommandType.MOVE, new Position(0, 0, FaceType.NORTH));}).toThrow(new Error(`${CommandType.MOVE} command must not have place parameter.`));
    expect(() => {new Command(CommandType.LEFT, new Position(0, 0, FaceType.NORTH));}).toThrow(new Error(`${CommandType.LEFT} command must not have place parameter.`));
    expect(() => {new Command(CommandType.RIGHT, new Position(0, 0, FaceType.NORTH));}).toThrow(new Error(`${CommandType.RIGHT} command must not have place parameter.`));
    expect(() => {new Command(CommandType.REPORT, new Position(0, 0, FaceType.NORTH));}).toThrow(new Error(`${CommandType.REPORT} command must not have place parameter.`));
  });
});