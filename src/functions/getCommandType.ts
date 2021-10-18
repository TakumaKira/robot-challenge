import CommandType from "../constants/commandType";

export default function getCommandType(s: string): CommandType | null {
  for (const t of Object.values(CommandType)) {
    if (s === t) {
      return CommandType[t];
    }
  }
  return null;
}