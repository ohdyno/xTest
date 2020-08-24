import { test } from './xTest';

export default () => {
  test('testing an empty test case', ({ expect }) => {
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
      successes: [],
      failures: [],
    });
  });

  test('testing a success test case', ({ expect }) => {
    const testCaseResultHandlerSpy = {
      success(result) {
        this.successIsCalled = true;
        this.successIsCalledWithResult = result;
      },
    };

    test(
      'a test case',
      ({ expect }) => {
        expect(true).toBe(true);
      },
      testCaseResultHandlerSpy,
    );

    expect(testCaseResultHandlerSpy.successIsCalled).toBe(true);
    expect(testCaseResultHandlerSpy.successIsCalledWithResult).toBe({
      name: 'a test case',
      successes: ['Expected\ntrue\nto be\ntrue'],
      failures: [],
    });
  });

  test('testing a failure test case', ({ expect }) => {
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
      successes: [],
      failures: ['Expected\ntrue\nto be\nfalse'],
    });
  });
};
