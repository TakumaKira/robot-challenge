import { TEST_DATA_FLAG } from '../config.json';

const messages: string[] = [];

export default class Logger {
  static log(message: string) {
    if (process.argv[2] !== TEST_DATA_FLAG) {
      console.log(message);
    } else {
      messages.push(message);
    }
  }
  static outputMessages(): string[] {
    return messages.splice(0);
  }
}