import Robot from './classes/robot';
import processCommand from './functions/commandProcessor';
import prompt from './functions/commandPrompter';
import read from './functions/fileReader';
import TestDataResult from './interfaces/testDataResult';

export default function run(filePath?: string): Promise<TestDataResult | void> {
  const robot = new Robot();
  const processInput = (input: string) => {
    const command = processCommand(input);
    if (command !== null) {
      robot.input(command);
    }
  };
  return filePath ? read(filePath, processInput) : prompt(processInput);
}