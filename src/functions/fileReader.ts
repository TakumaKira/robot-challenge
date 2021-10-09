import fs from 'fs';
import readline from 'readline';
import TestDataResult from '../interfaces/testDataResult';

export default function read(filePath: string, processInput: (input: string) => string | void): Promise<TestDataResult> {
  const promise = new Promise<TestDataResult>(resolve => {
    const rs = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: rs,
    });
    const lines: string[] = [];
    rl.on('line', (line: string) => {
      lines.push(line);
    });
    rl.on('close', () => {
      const msgs: string[] = [];
      for (let i = 0; i < lines.length - 1; i++) {
        const msg = processInput(lines[i]);
        if (msg) msgs.push(msg);
      }
      resolve({ messages: msgs, lastLine: lines[lines.length - 1] });
    });
  });
  return promise;
}