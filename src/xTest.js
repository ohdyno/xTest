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
    failures: [],
    success() {},
    fail(message) {
      this.failures.push(message);
    },
  };

  function e(actual) {
    return expect(actual, result);
  }

  body({ expect: e });

  if (!_.isEmpty(result.failures)) {
    resultHandler.fail({
      name,
      failures: result.failures,
    });
  } else {
    resultHandler.success({
      name,
    });
  }
}
