import Command from '../classes/command';
import Position from '../classes/position';
import { TABLE_SIZE } from '../config.json';
import CommandType from '../constants/commandType';
import FaceType from '../constants/faceType';
import processCommand from './commandProcessor';

describe('CommandProcessor', () => {
  test(`should return Command instance if given valid command`, () => {
    expect(processCommand(` ${CommandType.MOVE} `)).toEqual(new Command(CommandType.MOVE));
    expect(processCommand(` ${CommandType.LEFT} `)).toEqual(new Command(CommandType.LEFT));
    expect(processCommand(` ${CommandType.RIGHT} `)).toEqual(new Command(CommandType.RIGHT));
    expect(processCommand(` ${CommandType.REPORT} `)).toEqual(new Command(CommandType.REPORT));
    expect(processCommand(` ${CommandType.PLACE} 0 , 0 , ${FaceType.NORTH} `)).toEqual(new Command(CommandType.PLACE, new Position(0, 0, FaceType.NORTH)));
  });
  test(`should return null if given invalid command`, () => {
    expect(processCommand(`A`)).toEqual(null);
    expect(processCommand(`MO VE`)).toEqual(null);
    expect(processCommand(`${CommandType.MOVE} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`LE FT`)).toEqual(null);
    expect(processCommand(`${CommandType.LEFT} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`RI GHT`)).toEqual(null);
    expect(processCommand(`${CommandType.RIGHT} 0,0,${FaceType.NORTH}`)).toBe(null);
    expect(processCommand(`RE PORT`)).toEqual(null);
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
