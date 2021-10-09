import Robot from './classes/robot';
import { INVALID_COMMAND_MESSAGE } from './config.json';
import processCommand from './functions/commandProcessor';
import prompt from './functions/commandPrompter';
import read from './functions/fileReader';
import TestDataResult from './interfaces/testDataResult';

export default function run(filePath?: string): Promise<TestDataResult | void> {
  const robot = new Robot();
  const processInput = (input: string) => {
    const command = processCommand(input);
    const msg = !!command
      ? robot.input(command)
      : INVALID_COMMAND_MESSAGE;
    return msg;
  };
  return filePath ? read(filePath, processInput) : prompt(processInput);
}