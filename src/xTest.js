import { TestCase } from './TestCase/TestCase';
import { Expect } from './Expectation/Expect';

export function expect(actual, resultHandler) {
  return new Expect(actual, resultHandler);
}

export function test(name, body, resultHandler) {
  new TestCase(name, body).run(resultHandler);
}
