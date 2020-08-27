import { expect } from './xTest';

class TestCaseResultHandler {
  result(result) {}
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

    this.body({ expect: (actual) => expect(actual, resultRecorder) });

    resultHandler.result(result);
  }
}
