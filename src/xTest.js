class ExpectRecorderDummy {
  success() {}
}

class Expect {
  constructor(actual, recorder = new ExpectRecorderDummy()) {
    this.recorder = recorder;
    this.actual = actual;
  }

  toBe(expected) {
    if (this.actual !== expected) {
      throw new Error(
        `Assertion failed: Expected ${this.actual} to equal ${expected}`,
      );
    }
    this.recorder.success(`Expected ${this.actual} to be ${expected}`);
  }
}

export function expect(actual, recorder) {
  return new Expect(actual, recorder);
}
