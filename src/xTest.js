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
    const message = `Expected ${JSON.stringify(
      this.actual,
    )} to be ${JSON.stringify(expected)}`;
    if (_.isEqual(this.actual, expected)) {
      this.resultHandler.success(message);
    } else {
      this.resultHandler.fail(message);
    }
  }
}

export function expect(actual, resultHandler) {
  return new Expect(actual, resultHandler);
}

class TestCaseResultHandler {
  success() {}

  fail(result) {
    throw new Error(JSON.stringify(result));
  }
}

export function test(name, body, resultHandler = new TestCaseResultHandler()) {
  const result = {
    name,
    successes: [],
    failures: [],
  };

  const resultRecorder = {
    success() {},
    fail(message) {
      result.failures.push(message);
    },
  };

  function e(actual) {
    return expect(actual, resultRecorder);
  }

  body({ expect: e });

  function testCaseSucceeded(result) {
    return _.isEmpty(result.failures);
  }

  if (testCaseSucceeded(result)) {
    resultHandler.success(result);
  } else {
    resultHandler.fail(result);
  }
}
