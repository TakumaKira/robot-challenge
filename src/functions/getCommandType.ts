import CommandType from "../constants/commandType";

export default function getCommandType(command: string): CommandType | null {
  for (const ct of Object.values(CommandType)) {
    if (command === ct) {
      return CommandType[ct];
    }
  }
  return null;
}