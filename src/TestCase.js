import _ from 'lodash-es';
import { expect } from './xTest';

class TestCaseResultHandler {
  result(result) {
    if (result.failures.length > 0) {
      throw new Error(`Test Case Failed:
Name: ${result.name}
Failures:
${_.toString(result.failures)}`);
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

    this.body({ expect: (actual) => expect(actual, resultRecorder) });

    resultHandler.result(result);
  }
}
