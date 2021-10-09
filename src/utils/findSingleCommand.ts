import findCommandAndArg from "./findCommandAndArg";

export default function findSingleCommand(input: string): string | null {
  const { command, arg } = findCommandAndArg(input);
  return arg === null ? command : null;
}