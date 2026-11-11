import assert from "node:assert/strict";
import { test } from "node:test";
import { mean, median } from "../src/stats.js";

test("mean of 1, 2, 3 and 4 is 2.5", () => {
  assert.equal(mean([1, 2, 3, 4]), 2.5);
});

test("mean of an empty array throws RangeError", () => {
  assert.throws(() => mean([]), RangeError);
});

test("median of 3, 1 and 2 is 2", () => {
  assert.equal(median([3, 1, 2]), 2);
});
