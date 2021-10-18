import { INVALID_COMMAND_MESSAGE } from '../../config.json';
import CommandType from '../../constants/commandType';
import FaceType from '../../constants/faceType';
import getFaceType from '../../functions/getFaceType';
import hasNoLetter from '../../utils/hasNoLetter';
import sanitizeCommands from '../../utils/sanitizeCommands';
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

    let args: string[] | null = argStr.split(',');
    if (args.length !== 3) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    args = sanitizeCommands(args);
    if (args === null) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    const x = Number(args[0]);
    const y = Number(args[1]);
    if (isNaN(x) || isNaN(y)) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    let face: FaceType | null = getFaceType(args[2]);
    if (face === null) {
      throw new Error(INVALID_COMMAND_MESSAGE);
    }

    return new Position(x, y, face);
  };
  execute(position: Position): Position {
    return this.params === null ? position : this.params;
  }
}