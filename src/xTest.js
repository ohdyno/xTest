import { TestCase } from './TestCase/TestCase';
import { Expect } from './Expectation/Expect';

export function expect(actual, resultHandler) {
  return new Expect(actual, resultHandler);
}

export function test(name, body, resultHandler) {
  new TestCase(name, body).run(resultHandler);
}

class Fail {
  constructor(message) {
    this.message = message;
  }

  run(resultHandler) {
    resultHandler.fail({ message: this.message });
  }
}

export function fail(message, resultHandler) {
  new Fail(message).run(resultHandler);
}
