import _ from 'lodash-es';

class ErrorThrowingExpectResultHandler {
  success() {}

  fail(expectation) {
    throw new Error(`Expectation Failed:
${JSON.stringify(expectation, null, 4)}`);
  }
}

export class Expect {
  constructor(actual, resultHandler = new ErrorThrowingExpectResultHandler()) {
    this.resultHandler = resultHandler;
    this.actual = actual;
  }

  toBe(expected) {
    const expectation = {
      expected,
      actual: this.actual,
    };
    if (_.isEqual(this.actual, expected)) {
      this.resultHandler.success(expectation);
    } else {
      this.resultHandler.fail(expectation);
    }
  }

  toBeDefined() {
    const expectation = {
      expected: 'to be defined',
      actual: this.actual,
    };
    if (!_.isUndefined(this.actual)) {
      this.resultHandler.success(expectation);
    } else {
      this.resultHandler.fail(expectation);
    }
  }
}
