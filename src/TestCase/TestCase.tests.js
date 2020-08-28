import { test } from './TestCase';

export default () => {
  test('fail reports failure to result handler', ({ expect }) => {
    const testCaseResultHandlerSpy = {
      result(result) {
        this.result = result;
      },
    };

    test(
      'a test case with "fail"',
      ({ fail }) => {
        fail('a message for failure');
      },
      testCaseResultHandlerSpy,
    );

    expect(testCaseResultHandlerSpy.result.failures).toBe([
      {
        message: 'a message for failure',
      },
    ]);
  });

  test('default test result handler throws error when test case fails', ({
    expect,
  }) => {
    let error;

    try {
      test('a failing test case', ({ expect }) => {
        expect(true).toBe(false);
      });
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
  });

  test('an empty test case reports no successes or failures to result handler', ({
    expect,
  }) => {
    const testCaseResultHandlerSpy = {
      result(result) {
        this.result = result;
      },
    };

    test('a test case', () => {}, testCaseResultHandlerSpy);
    expect(testCaseResultHandlerSpy.result).toBe({
      name: 'a test case',
      successes: [],
      failures: [],
    });
  });

  test('a success test case with one expect reports one success to result handler', ({
    expect,
  }) => {
    const testCaseResultHandlerSpy = {
      result(result) {
        this.result = result;
      },
    };

    test(
      'a test case',
      ({ expect }) => {
        expect(true).toBe(true);
      },
      testCaseResultHandlerSpy,
    );

    expect(testCaseResultHandlerSpy.result).toBe({
      name: 'a test case',
      successes: [
        {
          expected: true,
          actual: true,
        },
      ],
      failures: [],
    });
  });

  test('a failure test case with one expect reports to result handler one failure', ({
    expect,
  }) => {
    const testCaseResultHandlerSpy = {
      result(result) {
        this.result = result;
      },
    };

    test(
      'a test case',
      ({ expect }) => {
        expect(true).toBe(false);
      },
      testCaseResultHandlerSpy,
    );

    expect(testCaseResultHandlerSpy.result).toBe({
      name: 'a test case',
      successes: [],
      failures: [
        {
          expected: false,
          actual: true,
        },
      ],
    });
  });

  test('a test case with a success and a fail expect reports both expects to result handler', ({
    expect,
  }) => {
    const testCaseResultHandlerSpy = {
      result(result) {
        this.result = result;
      },
    };

    test(
      'a test case',
      ({ expect }) => {
        expect(true).toBe(false);
        expect(true).toBe(true);
      },
      testCaseResultHandlerSpy,
    );

    expect(testCaseResultHandlerSpy.result.failures.length).toBe(1);
    expect(testCaseResultHandlerSpy.result.successes.length).toBe(1);
  });
};
