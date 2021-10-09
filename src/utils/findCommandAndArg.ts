export default function findCommandAndArg(input: string): { command: string | null, arg: string | null } {
  let hasFoundLetter = false;
  let command: string | null = null;
  let arg: string | null = null;
  for (let i = 0; i < input.length; i++) {
    if (hasFoundLetter && input[i] === ' ') {
      command = input.slice(0, i).replace(/\s/g, '');
      arg = input.slice(i + 1);
      if (arg.replace(/\s/g, '') === '')
        arg = null;
      break;
    }
    if (input[i] !== ' ') hasFoundLetter = true;
  }
  if (hasFoundLetter && command === null)
    command = input.replace(/\s/g, '');
  return { command, arg };
}