import CommandBase from "../classes/commands/commandBase";
import CommandLeft from "../classes/commands/commandLeft";
import CommandMove from "../classes/commands/commandMove";
import CommandPlace from "../classes/commands/commandPlace";
import CommandReport from "../classes/commands/commandReport";
import CommandRight from "../classes/commands/commandRight";
import CommandType from "../constants/commandType";

const commandMap: { [key in CommandType]: (argStr: string) => CommandBase<any> } = {
  PLACE: (argStr: string) => new CommandPlace(argStr),
  MOVE: (argStr: string) => new CommandMove(argStr),
  LEFT: (argStr: string) => new CommandLeft(argStr),
  RIGHT: (argStr: string) => new CommandRight(argStr),
  REPORT: (argStr: string) => new CommandReport(argStr),
};

export default function commandMapper(ct: CommandType, argStr: string): CommandBase<any> {
  return commandMap[ct](argStr);
}