function assert(actual, expected) {
  console.assert(
    actual === expected,
    `Expected ${actual} to equal ${expected}`,
  );
}

assert(true, true);

class Expect {
  constructor(actual) {
    this.actual = actual;
  }

  toBe(expected) {
    assert(this.actual, expected);
  }
}

function expect(actual) {
  return new Expect(actual);
}

expect(true).toBe(true);
