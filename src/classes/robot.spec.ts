import CommandType from "../constants/commandType";
import NEEDS_PLACE_COMMAND_FIRST from "../constants/needsPlaceCommandFirst";
import Command from "./command";
import Robot from "./robot";

describe('Robot', () => {
  test(`should return "${NEEDS_PLACE_COMMAND_FIRST}" if given other commands before ${CommandType.PLACE} command`, () => {
    expect(new Robot().input(new Command(CommandType.MOVE))).toBe(NEEDS_PLACE_COMMAND_FIRST);
    expect(new Robot().input(new Command(CommandType.LEFT))).toBe(NEEDS_PLACE_COMMAND_FIRST);
    expect(new Robot().input(new Command(CommandType.RIGHT))).toBe(NEEDS_PLACE_COMMAND_FIRST);
    expect(new Robot().input(new Command(CommandType.REPORT))).toBe(NEEDS_PLACE_COMMAND_FIRST);
  });
});