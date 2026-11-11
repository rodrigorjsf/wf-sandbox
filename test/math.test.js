import assert from "node:assert/strict";
import { test } from "node:test";
import { add, max } from "../src/math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("max", () => {
  assert.equal(max(2, 3), 3);
  assert.equal(max(5, 1), 5);
  assert.equal(max(4, 4), 4);
});
