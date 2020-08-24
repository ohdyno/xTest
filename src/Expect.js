import _ from 'lodash-es';

class ErrorThrowingExpectResultHandler {
  success() {}

  fail(message) {
    throw new Error(`Assertion Failed: ${message}`);
  }
}

export class Expect {
  constructor(actual, resultHandler = new ErrorThrowingExpectResultHandler()) {
    this.resultHandler = resultHandler;
    this.actual = actual;
  }

  toBe(expected) {
    const message = `Expected
${JSON.stringify(this.actual)}
to be
${JSON.stringify(expected)}`;
    if (_.isEqual(this.actual, expected)) {
      this.resultHandler.success(message);
    } else {
      this.resultHandler.fail(message);
    }
  }
}
