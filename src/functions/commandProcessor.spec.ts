import CommandLeft from '../classes/commands/commandLeft';
import CommandMove from '../classes/commands/commandMove';
import CommandPlace from '../classes/commands/commandPlace';
import CommandReport from '../classes/commands/commandReport';
import CommandRight from '../classes/commands/commandRight';
import { TABLE_SIZE } from '../config.json';
import CommandType from '../constants/commandType';
import FaceType from '../constants/faceType';
import processCommand from './commandProcessor';

describe('CommandProcessor', () => {
  test(`should return Command instance if given valid command`, () => {
    expect(processCommand(` ${CommandType.MOVE} `)).toEqual(new CommandMove(''));
    expect(processCommand(` ${CommandType.LEFT} `)).toEqual(new CommandLeft(''));
    expect(processCommand(` ${CommandType.RIGHT} `)).toEqual(new CommandRight(''));
    expect(processCommand(` ${CommandType.REPORT} `)).toEqual(new CommandReport(''));
    expect(processCommand(` ${CommandType.PLACE} ${0} , ${0} , ${FaceType.NORTH} `)).toEqual(new CommandPlace(`${0},${0},${FaceType.NORTH}`));
  });
  test(`should return null if given invalid command`, () => {
    expect(processCommand(`A`)).toBe(null);
    expect(processCommand(`MO VE`)).toBe(null);
    expect(processCommand(`${CommandType.MOVE} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`LE FT`)).toBe(null);
    expect(processCommand(`${CommandType.LEFT} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`RI GHT`)).toBe(null);
    expect(processCommand(`${CommandType.RIGHT} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`RE PORT`)).toBe(null);
    expect(processCommand(`${CommandType.REPORT} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE}`)).toBe(null);
    expect(processCommand(`A${CommandType.PLACE} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`A ${CommandType.PLACE} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE}0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} 0 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} 0,0 0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} 0,0,${FaceType.NORTH} H`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} x,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} 0,y,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} ${TABLE_SIZE},0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} 0,${TABLE_SIZE},${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} 0,0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`${CommandType.PLACE} 0,0,NO RTH`)).toBe(null);
  });
});
