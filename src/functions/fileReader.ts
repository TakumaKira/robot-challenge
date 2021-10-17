import fs from 'fs';
import readline from 'readline';
import TestDataResult from '../interfaces/testDataResult';
import Logger from './logger';

export default function read(filePath: string, processInput: (input: string) => void): Promise<TestDataResult> {
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
      for (let i = 0; i < lines.length - 1; i++) {
        processInput(lines[i]);
      }
      resolve({ messages: Logger.outputMessages(), lastLine: lines[lines.length - 1] });
    });
  });
  return promise;
}