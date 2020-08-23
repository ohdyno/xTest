import { expect, test } from './xTest';

const testCaseResultHandlerSpy = {
  success(result) {
    this.successIsCalled = true;
    this.successIsCalledWithResult = result;
  },
};

export default () => {
  test('a test case', () => {}, testCaseResultHandlerSpy);
  expect(testCaseResultHandlerSpy.successIsCalled).toBe(true);
  expect(testCaseResultHandlerSpy.successIsCalledWithResult).toBe({
    name: 'a test case',
  });
};
