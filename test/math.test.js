import assert from "node:assert/strict";
import { test } from "node:test";
import { add, clamp } from "../src/math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("clamp mantém o valor dentro do intervalo definido", () => {
  assert.equal(clamp(15, 0, 10), 10);
  assert.equal(clamp(-2, 0, 10), 0);
});
