import { INVALID_POSITION_MESSAGE, TABLE_SIZE } from '../config.json';
import FaceType from "../constants/faceType";
import formatOutput from '../functions/outputFormatter';
import { RobotPosition } from './robot';

export default class Position implements RobotPosition {
  constructor(
    private x: number,
    private y: number,
    private f: FaceType,
  ) {
    if (!this.isValid())
      throw new Error(INVALID_POSITION_MESSAGE);
  }

  private isValid(): boolean {
    return this.x >= 0 && this.x < TABLE_SIZE && this.y >= 0 && this.y < TABLE_SIZE;
  }

  move() {
    switch(this.f) {
      case FaceType.NORTH:
        this.y += 1;
        if (this.y >= TABLE_SIZE)
          this.y = TABLE_SIZE - 1;
        break;
      case FaceType.SOUTH:
        this.y -= 1;
        if (this.y < 0)
          this.y = 0;
        break;
      case FaceType.EAST:
        this.x += 1;
        if (this.x >= TABLE_SIZE)
          this.x = TABLE_SIZE - 1;
        break;
      case FaceType.WEST:
        this.x -= 1;
        if (this.x < 0)
          this.x = 0;
        break;
    }

    if (!this.isValid())
      throw new Error(INVALID_POSITION_MESSAGE);
  }

  rotateL() {
    switch (this.f) {
      case FaceType.NORTH:
        this.f = FaceType.WEST;
        break;
      case FaceType.WEST:
        this.f = FaceType.SOUTH;
        break;
      case FaceType.SOUTH:
        this.f = FaceType.EAST;
        break;
      case FaceType.EAST:
        this.f = FaceType.NORTH;
        break;
    }
  }

  rotateR() {
    switch (this.f) {
      case FaceType.NORTH:
        this.f = FaceType.EAST;
        break;
      case FaceType.EAST:
        this.f = FaceType.SOUTH;
        break;
      case FaceType.SOUTH:
        this.f = FaceType.WEST;
        break;
      case FaceType.WEST:
        this.f = FaceType.NORTH;
        break;
    }
  }

  report(): string {
    if (!this.isValid())
      throw new Error(INVALID_POSITION_MESSAGE);

    return formatOutput(this.x, this.y, this.f);
  }
}