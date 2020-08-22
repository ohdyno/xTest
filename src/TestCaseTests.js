import { expect, test } from './xTest';

const testCaseResultHandlerSpy = {
  success() {
    this.successIsCalled = true;
  },
};

export default () => {
  test('a test case', () => {}, testCaseResultHandlerSpy);
  expect(testCaseResultHandlerSpy.successIsCalled).toBe(true);
};
