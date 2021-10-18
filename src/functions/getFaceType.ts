import FaceType from "../constants/faceType";

export default function getFaceType(s: string): FaceType | null {
  for (const t of Object.values(FaceType)) {
    if (s === t) {
      return FaceType[t];
    }
  }
  return null;
}