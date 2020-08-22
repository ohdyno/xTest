function assert(actual, expected) {
  console.assert(
    actual === expected,
    `Expected ${actual} to equal ${expected}`,
  );
}

assert(true, true);
