import assert from "node:assert/strict";
import { test } from "node:test";
import { capitalize, slugify } from "../src/strings.js";

test("capitalize uppercases the first letter and rejects a non-string", () => {
  assert.equal(capitalize("hello world"), "Hello world");
  assert.throws(() => capitalize(1), TypeError);
});

test("slugify returns a lowercase hyphenated slug and rejects a non-string", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
  assert.equal(slugify("  Multiple   spaces "), "multiple-spaces");
  assert.throws(() => slugify(1), TypeError);
});
