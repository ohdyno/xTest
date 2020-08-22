function assert(actual, expected) {
  if (actual !== expected) {
    throw new Error(
      `Assertion failed: Expected ${actual} to equal ${expected}`,
    );
  }
}

class Expect {
  constructor(recorder, actual) {
    this.recorder = recorder;
    this.actual = actual;
  }

  toBe(expected) {
    try {
      assert(this.actual, expected);
      this.recorder.success();
    } catch (e) {}
  }
}

export function expect(actual, recorder) {
  return new Expect(recorder, actual);
}
