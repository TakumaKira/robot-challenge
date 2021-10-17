import CommandBase from "../classes/commands/commandBase";
import { INVALID_COMMAND_MESSAGE } from '../config.json';
import findCommandAndArg from "../utils/findCommandAndArg";
import commandMapper from "./commandMapper";
import getCommandType from "./getCommandType";
import Logger from './logger';

export default function processCommand(input: string): CommandBase<any> | null {
  const { command, argStr } = findCommandAndArg(input);
  if (command === null) {
    Logger.log(INVALID_COMMAND_MESSAGE);
    return null;
  }

  const ct = getCommandType(command);
  if (!ct) {
    Logger.log(INVALID_COMMAND_MESSAGE);
    return null;
  }

  try {
    const command = commandMapper(ct, argStr || '');
    return command;
  } catch (error: any) {
    Logger.log(error.message);
    return null;
  }
}