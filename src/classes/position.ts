import { INVALID_POSITION_MESSAGE, TABLE_WIDTH, TABLE_DEPTH } from '../config.json';
import FaceType from "../constants/faceType";

export default class Position {
  constructor(
    public x: number,
    public y: number,
    public f: FaceType,
  ) {
    if (!this.isValid())
      throw new Error(INVALID_POSITION_MESSAGE);
  }

  private isValid(): boolean {
    return this.x >= 0 && this.x < TABLE_WIDTH && this.y >= 0 && this.y < TABLE_DEPTH;
  }
}