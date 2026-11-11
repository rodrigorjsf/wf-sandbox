export function mean(values) {
  if (values.length === 0) {
    throw new RangeError("Cannot compute mean of an empty array");
  }
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
}

export function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}
