import findCommandAndArg from "./findCommandAndArg";

export default function findSingleCommand(input: string): string | null {
  const { command, argStr } = findCommandAndArg(input);
  return argStr === null ? command : null;
}