import { INVALID_COMMAND_MESSAGE, INVALID_FACE_TYPE } from '../../config.json';
import CommandType from '../../constants/commandType';
import FaceType from '../../constants/faceType';
import hasNoLetter from "../../utils/hasNoLetter";
import Position from '../position';
import CommandBase from "./commandBase";

export default class CommandRight extends CommandBase<null> {
  type = CommandType.RIGHT;
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
        position.f = FaceType.EAST;
        return position;
      case FaceType.EAST:
        position.f = FaceType.SOUTH;
        return position;
      case FaceType.SOUTH:
        position.f = FaceType.WEST;
        return position;
      case FaceType.WEST:
        position.f = FaceType.NORTH;
        return position;
      default:
        throw new Error(INVALID_FACE_TYPE);
    }
  }
}