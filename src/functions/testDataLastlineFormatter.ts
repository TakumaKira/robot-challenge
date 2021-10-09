import { OUTPUT_PREFIX } from '../config.json';

export default function formatLastline(messages: string[]): string {
  return `${OUTPUT_PREFIX}["${messages.join('","')}"]`;
}