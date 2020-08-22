class ExpectRecorderDummy {
  success() {}

  fail() {}
}

class Expect {
  constructor(actual, recorder = new ExpectRecorderDummy()) {
    this.recorder = recorder;
    this.actual = actual;
  }

  toBe(expected) {
    if (this.actual !== expected) {
      const message = `Expected ${this.actual} to be ${expected}`;
      this.recorder.fail(message);
      throw new Error(`Assertion failed: ${message}`);
    }
    this.recorder.success(`Expected ${this.actual} to be ${expected}`);
  }
}

export function expect(actual, recorder) {
  return new Expect(actual, recorder);
}
