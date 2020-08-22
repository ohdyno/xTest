function assert(actual, expected) {
  console.assert(
    actual === expected,
    `Expected ${actual} to equal ${expected}`,
  );
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
