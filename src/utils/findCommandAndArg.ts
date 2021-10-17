export default function findCommandAndArg(input: string): { command: string | null, argStr: string | null } {
  let hasFoundLetter = false;
  let command: string | null = null;
  let argStr: string | null = null;
  for (let i = 0; i < input.length; i++) {
    if (hasFoundLetter && input[i] === ' ') {
      command = input.slice(0, i).replace(/\s/g, '');
      argStr = input.slice(i + 1);
      if (argStr.replace(/\s/g, '') === '')
        argStr = null;
      break;
    }
    if (input[i] !== ' ') hasFoundLetter = true;
  }
  if (hasFoundLetter && command === null)
    command = input.replace(/\s/g, '');
  return { command, argStr };
}