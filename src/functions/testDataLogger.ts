import TestDataResult from "../interfaces/testDataResult";
import formatLastline from './testDataLastlineFormatter';

export default function logTestData(fileName: string, testDataResult: TestDataResult) {
  const { messages, lastLine } = testDataResult;
  const output = formatLastline(messages);
  if (output === lastLine) {
    console.log(`${fileName}: PASSED`);
  } else {
    console.log(`${fileName}: FAILED\n- Expected ${lastLine}\n- ${output}`);
  }
}