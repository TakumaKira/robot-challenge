import FaceType from '../constants/faceType';
import getFaceType from './getFaceType';

describe('getFaceType', () => {
  test(`should return FaceType if get valid command`, () => {
    expect(getFaceType('NORTH')).toBe(FaceType.NORTH);
  });
  test(`should return null if get invalid command`, () => {
    expect(getFaceType('NORT')).toBe(null);
  });
});