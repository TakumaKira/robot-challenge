import CommandType from "../constants/commandType";
import RobotPosition from './position';

export default class Command {
  constructor(public readonly type: CommandType, public readonly position?: RobotPosition) {
    if (type === CommandType.PLACE && position === undefined)
      throw new Error(`${CommandType.PLACE} command must have place parameter.`);
    if (type === CommandType.MOVE && position !== undefined)
      throw new Error(`${CommandType.MOVE} command must not have place parameter.`);
    if (type === CommandType.LEFT && position !== undefined)
      throw new Error(`${CommandType.LEFT} command must not have place parameter.`);
    if (type === CommandType.RIGHT && position !== undefined)
      throw new Error(`${CommandType.RIGHT} command must not have place parameter.`);
    if (type === CommandType.REPORT && position !== undefined)
      throw new Error(`${CommandType.REPORT} command must not have place parameter.`);
  }
}