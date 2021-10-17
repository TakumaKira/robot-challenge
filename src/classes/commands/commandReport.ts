import { INVALID_COMMAND_MESSAGE } from '../../config.json';
import CommandType from '../../constants/commandType';
import Logger from '../../functions/logger';
import formatOutput from '../../functions/outputFormatter';
import hasNoLetter from '../../utils/hasNoLetter';
import Position from '../position';
import CommandBase from "./commandBase";

export default class CommandReport extends CommandBase<null> {
  type = CommandType.REPORT;
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
    Logger.log(formatOutput(position.x, position.y, position.f));
    return position;
  }
}