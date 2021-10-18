import { INVALID_COMMAND_MESSAGE, INVALID_FACE_TYPE, TABLE_WIDTH, TABLE_DEPTH } from '../../config.json';
import CommandType from '../../constants/commandType';
import FaceType from '../../constants/faceType';
import hasNoLetter from "../../utils/hasNoLetter";
import Position from '../position';
import CommandBase from "./commandBase";

export default class CommandMove extends CommandBase<null> {
  type = CommandType.MOVE;
  constructor(argStr: string) {
    super(argStr);
  }
  getParams(argStr: string): null {
    if (!hasNoLetter(argStr)) {
      throw new Error(INVALID_COMMAND_MESSAGE)
    }
    return null;
  };
  execute(position: Position): Position {
    switch (position.f) {
      case FaceType.NORTH:
        position.y = Math.min(position.y + 1, TABLE_DEPTH - 1);
        return position;
      case FaceType.SOUTH:
        position.y = Math.max(position.y - 1, 0);
        return position;
      case FaceType.EAST:
        position.x = Math.min(position.x + 1, TABLE_WIDTH - 1);
        return position;
      case FaceType.WEST:
        position.x = Math.max(position.x - 1, 0);
        return position;
      default:
        throw new Error(INVALID_FACE_TYPE);
    }
  }
}