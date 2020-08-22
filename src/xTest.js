function assert(actual, expected) {
  if (actual !== expected) {
    throw new Error(
      `Assertion failed: Expected ${actual} to equal ${expected}`,
    );
  }
}

class Expect {
  constructor(actual) {
    this.actual = actual;
  }

  toBe(expected) {
    assert(this.actual, expected);
  }
}

export function expect(actual) {
  return new Expect(actual);
}
