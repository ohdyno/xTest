import _ from 'lodash-es';

class ErrorThrowingExpectResultHandler {
  success() {}

  fail(message) {
    throw new Error(`Assertion Failed: ${message}`);
  }
}

class Expect {
  constructor(actual, resultHandler = new ErrorThrowingExpectResultHandler()) {
    this.resultHandler = resultHandler;
    this.actual = actual;
  }

  toBe(expected) {
    if (_.isEqual(this.actual, expected)) {
      this.resultHandler.success(`Expected ${this.actual} to be ${expected}`);
    } else {
      const message = `Expected ${this.actual} to be ${expected}`;
      this.resultHandler.fail(message);
    }
  }
}

export function expect(actual, resultHandler) {
  return new Expect(actual, resultHandler);
}

export function test(name, body, resultHandler) {
  resultHandler.success({ name });
}
