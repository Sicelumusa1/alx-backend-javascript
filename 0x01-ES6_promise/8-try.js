export default function devideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot devide by 0');
  }
  return numerator / denominator;
}
