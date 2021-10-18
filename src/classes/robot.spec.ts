import CommandType from "../constants/commandType";
import FaceType from "../constants/faceType";
import NEEDS_PLACE_COMMAND_FIRST from "../constants/needsPlaceCommandFirst";
import formatPositionOutput from "../functions/outputFormatter";
import CommandLeft from './commands/commandLeft';
import CommandMove from "./commands/commandMove";
import CommandPlace from './commands/commandPlace';
import CommandReport from "./commands/commandReport";
import CommandRight from './commands/commandRight';
import Position from "./position";
import Robot from "./robot";

describe('Robot', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  test(`should return "${NEEDS_PLACE_COMMAND_FIRST}" if given other commands before ${CommandType.PLACE} command`, () => {
    new Robot().input(new CommandMove(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(NEEDS_PLACE_COMMAND_FIRST);
    new Robot().input(new CommandLeft(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(NEEDS_PLACE_COMMAND_FIRST);
    new Robot().input(new CommandRight(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(NEEDS_PLACE_COMMAND_FIRST);
    new Robot().input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(NEEDS_PLACE_COMMAND_FIRST);
  });

  test(`should report the position correctly`, () => {
    const robot = new Robot();
    const x = 1;
    const y = 1;

    robot.input(new CommandPlace(`${x}, ${y}, ${FaceType.NORTH}`));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.NORTH))}`);
    robot.input(new CommandLeft(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.WEST))}`);
    robot.input(new CommandLeft(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.SOUTH))}`);
    robot.input(new CommandLeft(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.EAST))}`);
    robot.input(new CommandLeft(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.NORTH))}`);
    robot.input(new CommandRight(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.EAST))}`);
    robot.input(new CommandRight(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.SOUTH))}`);
    robot.input(new CommandRight(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.WEST))}`);
    robot.input(new CommandRight(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y, FaceType.NORTH))}`);

    robot.input(new CommandPlace(`${x}, ${y}, ${FaceType.NORTH}`));
    robot.input(new CommandMove(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y + 1, FaceType.NORTH))}`);
    robot.input(new CommandPlace(`${x}, ${y}, ${FaceType.WEST}`));
    robot.input(new CommandMove(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x - 1, y, FaceType.WEST))}`);
    robot.input(new CommandPlace(`${x}, ${y}, ${FaceType.SOUTH}`));
    robot.input(new CommandMove(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x, y - 1, FaceType.SOUTH))}`);
    robot.input(new CommandPlace(`${x}, ${y}, ${FaceType.EAST}`));
    robot.input(new CommandMove(''));
    robot.input(new CommandReport(''));
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatPositionOutput(new Position(x + 1, y, FaceType.EAST))}`);
  });
});
