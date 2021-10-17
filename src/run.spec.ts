import mockStdin from 'mock-stdin';
import { INVALID_POSITION_MESSAGE, QUIT_COMMAND, TABLE_SIZE } from './config.json';
import CommandType from './constants/commandType';
import FaceType from './constants/faceType';
import NEEDS_PLACE_COMMAND_FIRST from './constants/needsPlaceCommandFirst';
import formatOutput from './functions/outputFormatter';
import run from './run';

describe('run', () => {
  let stdin: mockStdin.MockSTDIN;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    stdin = mockStdin.stdin();
    consoleSpy = jest.spyOn(console, 'log');
  });

  test(`should report ${formatOutput(3, 3, FaceType.NORTH)} after ${CommandType.PLACE} 1,2,${FaceType.EAST} -> ${CommandType.MOVE} -> ${CommandType.MOVE} -> ${CommandType.LEFT} -> ${CommandType.MOVE}`, async () => {
    setTimeout(() => {
      stdin.send(`${CommandType.PLACE} 1,2,${FaceType.EAST}\r`);
      stdin.send(`${CommandType.MOVE}\r`);
      stdin.send(`${CommandType.MOVE}\r`);
      stdin.send(`${CommandType.LEFT}\r`);
      stdin.send(`${CommandType.MOVE}\r`);
      stdin.send(`${CommandType.REPORT}\r`);
      stdin.send(`${QUIT_COMMAND}\r`);
    });
    await run();
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatOutput(3, 3, FaceType.NORTH)}`);
  });

  test(`should report ${formatOutput(4, 4, FaceType.SOUTH)} after ${CommandType.PLACE} 0,0,${FaceType.NORTH} -> ${CommandType.PLACE} 4,4,${FaceType.SOUTH}`, async () => {
    setTimeout(() => {
      stdin.send(`${CommandType.PLACE} 0,0,${FaceType.NORTH}\r`);
      stdin.send(`${CommandType.PLACE} 4,4,${FaceType.SOUTH}\r`);
      stdin.send(`${CommandType.REPORT}\r`);
      stdin.send(`${QUIT_COMMAND}\r`);
    });
    await run();
    expect(consoleSpy).toHaveBeenLastCalledWith(`${formatOutput(4, 4, FaceType.SOUTH)}`);
  });

  test(`should discard first ${CommandType.PLACE} command if it is going to place the robot out of the table`, async () => {
    setTimeout(() => {
      stdin.send(`${CommandType.PLACE} ${TABLE_SIZE},0,${FaceType.NORTH}\r`);
      stdin.send(`${QUIT_COMMAND}\r`);
    });
    await run();
    expect(consoleSpy).toHaveBeenLastCalledWith(INVALID_POSITION_MESSAGE);
  });
  test(`should discard ${CommandType.PLACE} command if it is going to place the robot out of the table`, async () => {
    setTimeout(() => {
      stdin.send(`${CommandType.PLACE} 0,0,${FaceType.NORTH}\r`);
      stdin.send(`${CommandType.PLACE} ${TABLE_SIZE},0,${FaceType.NORTH}\r`);
      stdin.send(`${QUIT_COMMAND}\r`);
    });
    await run();
    expect(consoleSpy).toHaveBeenLastCalledWith(INVALID_POSITION_MESSAGE);
  });

  test(`should output "${NEEDS_PLACE_COMMAND_FIRST}" if ${CommandType.PLACE} command has not been entered before ${CommandType.MOVE} commands is entered`, async () => {
    setTimeout(() => {
      stdin.send(`${CommandType.MOVE}\r`);
      stdin.send(`${QUIT_COMMAND}\r`);
    });
    await run();
    expect(consoleSpy).toHaveBeenLastCalledWith(NEEDS_PLACE_COMMAND_FIRST);
  });
  test(`should output "${NEEDS_PLACE_COMMAND_FIRST}" if ${CommandType.PLACE} command has not been entered before ${CommandType.LEFT} commands is entered`, async () => {
    setTimeout(() => {
      stdin.send(`${CommandType.LEFT}\r`);
      stdin.send(`${QUIT_COMMAND}\r`);
    });
    await run();
    expect(consoleSpy).toHaveBeenLastCalledWith(NEEDS_PLACE_COMMAND_FIRST);
  });
  test(`should output "${NEEDS_PLACE_COMMAND_FIRST}" if ${CommandType.PLACE} command has not been entered before ${CommandType.RIGHT} commands is entered`, async () => {
    setTimeout(() => {
      stdin.send(`${CommandType.RIGHT}\r`);
      stdin.send(`${QUIT_COMMAND}\r`);
    });
    await run();
    expect(consoleSpy).toHaveBeenLastCalledWith(NEEDS_PLACE_COMMAND_FIRST);
  });
  test(`should output "${NEEDS_PLACE_COMMAND_FIRST}" if ${CommandType.PLACE} command has not been entered before ${CommandType.REPORT} commands is entered`, async () => {
    setTimeout(() => {
      stdin.send(`${CommandType.REPORT}\r`);
      stdin.send(`${QUIT_COMMAND}\r`);
    });
    await run();
    expect(consoleSpy).toHaveBeenLastCalledWith(NEEDS_PLACE_COMMAND_FIRST);
  });
});