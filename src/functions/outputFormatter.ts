import FaceType from "../constants/faceType";

export default function formatOutput(x: number, y: number, f: FaceType): string {
  return `${x},${y},${FaceType[f]}`
}