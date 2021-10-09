import Command from "../classes/command";
import RobotPosition from "../classes/position";
import CommandType from "../constants/commandType";
import FaceType from "../constants/faceType";
import findCommandAndArg from "../utils/findCommandAndArg";
import findSingleCommand from "../utils/findSingleCommand";

export default function processCommand(input: string): Command | null {
  const { command, arg } = findCommandAndArg(input);
  if (command === null) return null;

  switch (command) {
    case CommandType.PLACE:
      if (arg === null) return null;

      const args = arg.split(',');
      if (args.length !== 3) return null;

      const arg1 = findSingleCommand(args[0]);
      if (arg1 === null) return null;
      const arg2 = findSingleCommand(args[1]);
      if (arg2 === null) return null;
      const arg3 = findSingleCommand(args[2]);
      if (arg3 === null) return null;

      const x = Number(arg1);
      const y = Number(arg2);
      if (isNaN(x) || isNaN(y)) return null;

      let face: FaceType | null = null;
      if (arg3 === FaceType.NORTH) face = FaceType.NORTH;
      else if (arg3 === FaceType.SOUTH) face = FaceType.SOUTH;
      else if (arg3 === FaceType.EAST) face = FaceType.EAST;
      else if (arg3 === FaceType.WEST) face = FaceType.WEST;
      if (face === null) return null;
  
      try {
        const position = new RobotPosition(x, y, face);
        return new Command(CommandType.PLACE, position);
      } catch {
        return null;
      }
    case CommandType.MOVE:
      return arg === null ? new Command(CommandType.MOVE) : null;
    case CommandType.LEFT:
      return arg === null ? new Command(CommandType.LEFT) : null;
    case CommandType.RIGHT:
      return arg === null ? new Command(CommandType.RIGHT) : null;
    case CommandType.REPORT:
      return arg === null ? new Command(CommandType.REPORT) : null;
    default:
      return null;
  }
}