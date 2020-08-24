import _ from 'lodash-es';
import { expect } from './xTest';

class TestCaseResultHandler {
  success() {}

  fail(result) {
    throw new Error(`Test case: ${result.name}
Failures: ${_.toString(result.failures)}`);
  }
}

export class TestCase {
  constructor(name, body) {
    this.name = name;
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

    function testCaseSucceeded(result) {
      return _.isEmpty(result.failures);
    }

    if (testCaseSucceeded(result)) {
      resultHandler.success(result);
    } else {
      resultHandler.fail(result);
    }
  }
}
