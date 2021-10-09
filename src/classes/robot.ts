import Command from "../classes/command";
import CommandType from "../constants/commandType";
import NEEDS_PLACE_COMMAND_FIRST from "../constants/needsPlaceCommandFirst";

export interface RobotPosition {
  move(): void;
  rotateL(): void;
  rotateR(): void;
  report(): string;
}

export default class Robot {
  private position?: RobotPosition;
  
  input(command: Command): string | void {
    if (!this.position && command.type !== CommandType.PLACE) {
      return NEEDS_PLACE_COMMAND_FIRST;
    }
    
    switch (command.type) {
      case CommandType.PLACE:
        this.position = command.position;
        return;
      case CommandType.MOVE:
        this.position!.move();
        return;
      case CommandType.LEFT:
        this.position!.rotateL();
        return;
      case CommandType.RIGHT:
        this.position!.rotateR();
        return;
      case CommandType.REPORT:
        return this.position!.report();
    }
  }
}
