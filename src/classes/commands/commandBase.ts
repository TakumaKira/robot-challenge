import CommandType from "../../constants/commandType";
import Position from "../position";

export default abstract class CommandBase<T> {
  abstract type: CommandType;
  params: T;
  abstract getParams(argStr: string): T;
  abstract execute(position: Position): Position;
  constructor(argStr: string) {
    this.params = this.getParams(argStr);
  }
}