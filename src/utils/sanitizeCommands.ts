import findSingleCommand from "./findSingleCommand";

export default function sanitizeCommands(commands: string[]): string[] | null {
  const sanitized: string[] = [];
  for (const command of commands) {
    const s = findSingleCommand(command);
    if (s === null) return null;
    sanitized.push(s);
  }
  return sanitized;
}