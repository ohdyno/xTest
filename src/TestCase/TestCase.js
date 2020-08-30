import { fail } from '../Expectation/Fail';
import { expect } from '../Expectation/Expect';
import { TestCaseResultConsolePrinter } from './TestCaseResultConsolePrinter';

export function test(
  name,
  body,
  resultHandler = new TestCaseResultConsolePrinter(),
) {
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
