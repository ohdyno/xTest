import { fail } from '../Expectation/Fail';
import { expect } from '../Expectation/Expect';

class TestCaseResultHandler {
  success(result) {
    console.log(`Test Case Passed:
Name: ${result.name}
Successes:
${JSON.stringify(
  result.successes,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}
Failures:
${JSON.stringify(
  result.failures,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}`);
  }

  fail(result) {
    console.error(`Test Case Passed:
Name: ${result.name}
Successes:
${JSON.stringify(
  result.successes,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}
Failures:
${JSON.stringify(
  result.failures,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}`);
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
    test: (name, body) => test(name, body, resultRecorder),
  });

  if (result.failures.length > 0) {
    resultHandler.fail(result);
  } else {
    resultHandler.success(result);
  }
}
