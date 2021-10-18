import Position from "../classes/position";

export default function formatPositionOutput(position: Position): string {
  return `${position.x},${position.y},${position.f}`
}