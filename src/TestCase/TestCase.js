import { fail } from '../Expectation/Fail';
import { expect } from '../Expectation/Expect';

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

export function test(name, body, resultHandler = new TestCaseResultHandler()) {
  const result = {
    name,
    successes: [],
    failures: [],
  };

  const resultRecorder = {
    success(message) {
      result.successes.push(message);
    },
    fail(message) {
      result.failures.push(message);
    },
  };

  body({
    expect: (actual) => expect(actual, resultRecorder),
    fail: (message) => fail(message, resultRecorder),
  });

  resultHandler.result(result);
}
