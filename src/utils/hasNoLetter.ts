export default function hasNoLetter(string: string) {
  return string.split(' ').filter(s => s !== '').length === 0;
}