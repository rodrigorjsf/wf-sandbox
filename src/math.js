export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function max(a, b) {
  return a >= b ? a : b;
}

export function clamp(x, min, max) {
  return Math.min(Math.max(x, min), max);
}
