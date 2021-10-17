import CommandType from "../constants/commandType";
import NEEDS_PLACE_COMMAND_FIRST from "../constants/needsPlaceCommandFirst";
import Logger from "../functions/logger";
import CommandBase from "./commands/commandBase";
import Position from "./position";

export default class Robot {
  private position?: Position;
  
  input(command: CommandBase<any>) {
    if (!this.position && command.type !== CommandType.PLACE) {
      Logger.log(NEEDS_PLACE_COMMAND_FIRST);
      return;
    }
    
    this.position = command.execute(this.position!)!;
  }
}
