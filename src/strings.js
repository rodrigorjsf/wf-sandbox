export function capitalize(s) {
  if (typeof s !== "string") {
    throw new TypeError("expected a string");
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function slugify(s) {
  if (typeof s !== "string") {
    throw new TypeError("expected a string");
  }
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
