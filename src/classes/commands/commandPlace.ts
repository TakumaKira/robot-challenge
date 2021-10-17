import { INVALID_COMMAND_MESSAGE } from '../../config.json';
import CommandType from '../../constants/commandType';
import FaceType from '../../constants/faceType';
import findSingleCommand from '../../utils/findSingleCommand';
import hasNoLetter from '../../utils/hasNoLetter';
import Position from '../position';
import CommandBase from './commandBase';

export default class CommandPlace extends CommandBase<Position> {
  type = CommandType.PLACE;
  constructor(argStr: string) {
    super(argStr);
  }
  getParams(argStr: string): Position {
    if (hasNoLetter(argStr)) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    const args = argStr.split(',');
    if (args.length !== 3) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    const arg1 = findSingleCommand(args[0]);
    if (arg1 === null) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }
    const arg2 = findSingleCommand(args[1]);
    if (arg2 === null) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }
    const arg3 = findSingleCommand(args[2]);
    if (arg3 === null) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    const x = Number(arg1);
    const y = Number(arg2);
    if (isNaN(x) || isNaN(y)) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    let face: FaceType | null = null;
    if (arg3 === FaceType.NORTH) face = FaceType.NORTH;
    else if (arg3 === FaceType.SOUTH) face = FaceType.SOUTH;
    else if (arg3 === FaceType.EAST) face = FaceType.EAST;
    else if (arg3 === FaceType.WEST) face = FaceType.WEST;
    if (face === null) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    return new Position(x, y, face);
  };
  execute(position: Position): Position {
    return this.params === null ? position : this.params;
  }
}