import { INVALID_COMMAND_MESSAGE } from '../../config.json';
import FaceType from '../../constants/faceType';
import formatPositionOutput from '../../functions/outputFormatter';
import Position from '../position';
import Robot from '../robot';
import CommandPlace from './commandPlace';
import CommandReport from './commandReport';

describe('CommandReport', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  test(`should throw if given non empty argStr`, () => {
    expect(() => {new CommandReport('A')}).toThrow(new Error(INVALID_COMMAND_MESSAGE));
  });
  test(`should report correctly`, () => {
    const x = 3;
    const y = 3;
    const f = FaceType.NORTH;
    const robot = new Robot();
    robot.input(new CommandPlace(`${x}, ${y}, ${f}`));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, f))}`);
  });
});