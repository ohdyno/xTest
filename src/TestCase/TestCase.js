import { expect, fail } from '../xTest';

class TestCaseResultHandler {
  result(result) {
    if (result.failures.length > 0) {
      throw new Error(`Test Case Failed:
Name: ${result.name}
Failures:
${JSON.stringify(
  result.failures,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}`);
    }
  }
}

export class TestCase {
  constructor(name, body) {
    this.body = body;
    this.result = {
      name,
      successes: [],
      failures: [],
    };
  }

  run(resultHandler = new TestCaseResultHandler()) {
    const result = this.result;
    const resultRecorder = {
      success(message) {
        result.successes.push(message);
      },
      fail(message) {
        result.failures.push(message);
      },
    };

    this.body({
      expect: (actual) => expect(actual, resultRecorder),
      fail: (message) => fail(message, resultRecorder),
    });

    resultHandler.result(result);
  }
}
