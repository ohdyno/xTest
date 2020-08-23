import { expect, test } from './xTest';

function success() {
  const testCaseResultHandlerSpy = {
    success(result) {
      this.successIsCalled = true;
      this.successIsCalledWithResult = result;
    },
  };

  test('a test case', () => {}, testCaseResultHandlerSpy);
  expect(testCaseResultHandlerSpy.successIsCalled).toBe(true);
  expect(testCaseResultHandlerSpy.successIsCalledWithResult).toBe({
    name: 'a test case',
  });
}

function failure() {
  const testCaseResultHandlerSpy = {
    fail(result) {
      this.failureIsCalled = true;
      this.failureIsCalledWithResult = result;
    },
  };

  test(
    'a test case',
    ({ expect }) => {
      expect(true).toBe(false);
    },
    testCaseResultHandlerSpy,
  );
  expect(testCaseResultHandlerSpy.failureIsCalled).toBe(true);
  expect(testCaseResultHandlerSpy.failureIsCalledWithResult).toBe({
    name: 'a test case',
  });
}

export default () => {
  success();
  failure();
};
