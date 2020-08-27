import { test } from './xTest';

export default () => {
  test('testing an empty test case', ({ expect }) => {
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

  test('testing a success test case', ({ expect }) => {
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
      successes: ['Expected\ntrue\nto be\ntrue'],
      failures: [],
    });
  });

  test('testing a failure test case', ({ expect }) => {
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
      failures: ['Expected\ntrue\nto be\nfalse'],
    });
  });
};
