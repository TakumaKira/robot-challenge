import { INVALID_COMMAND_MESSAGE } from '../../config.json';
import CommandType from '../../constants/commandType';
import FaceType from '../../constants/faceType';
import hasNoLetter from "../../utils/hasNoLetter";
import Position from '../position';
import CommandBase from "./commandBase";

export default class CommandLeft extends CommandBase<null> {
  type = CommandType.LEFT;
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
        position.f = FaceType.WEST;
        return position;
      case FaceType.WEST:
        position.f = FaceType.SOUTH;
        return position;
      case FaceType.SOUTH:
        position.f = FaceType.EAST;
        return position;
      case FaceType.EAST:
        position.f = FaceType.NORTH;
        return position;
    }
  }
}