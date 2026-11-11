import assert from "node:assert/strict";
import { test } from "node:test";
import { add, subtract, multiply, max, clamp } from "../src/math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("subtract", () => {
  assert.equal(subtract(5, 3), 2);
});

test("multiply", () => {
  assert.equal(multiply(2, 3), 6);
});

test("max", () => {
  assert.equal(max(2, 3), 3);
  assert.equal(max(5, 1), 5);
  assert.equal(max(4, 4), 4);
});

test("clamp mantém o valor dentro do intervalo definido", () => {
  assert.equal(clamp(15, 0, 10), 10);
  assert.equal(clamp(-2, 0, 10), 0);
});
