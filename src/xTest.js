import { TestCase } from './TestCase/TestCase';

export function test(name, body, resultHandler) {
  new TestCase(name, body).run(resultHandler);
}

export function fail(message, resultHandler) {
  resultHandler.fail({ message });
}
