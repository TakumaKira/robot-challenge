import readline from 'readline';
import { QUIT_COMMAND } from '../config.json';

export default function prompt(processInput: (input: string) => string | void): Promise<void> {
  const promise = new Promise<void>(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.setPrompt(`Input your command("${QUIT_COMMAND}" to quit): `);
    rl.on('line', (line: string) => {
      if (line !== QUIT_COMMAND) {
        const msg = processInput(line);
        if (msg) console.log(msg);
        rl.prompt();
      } else {
        rl.close();
      }
    }).on('close', () => {
      resolve();
    });
    rl.prompt();
  });
  return promise;
}
