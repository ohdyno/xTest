class ExpectResultHandlerDummy {
  success() {}

  fail() {}
}

class Expect {
  constructor(actual, resultHandler = new ExpectResultHandlerDummy()) {
    this.resultHandler = resultHandler;
    this.actual = actual;
  }

  toBe(expected) {
    if (this.actual !== expected) {
      const message = `Expected ${this.actual} to be ${expected}`;
      this.resultHandler.fail(message);
      throw new Error(`Assertion failed: ${message}`);
    }
    this.resultHandler.success(`Expected ${this.actual} to be ${expected}`);
  }
}

export function expect(actual, resultHandler) {
  return new Expect(actual, resultHandler);
}
