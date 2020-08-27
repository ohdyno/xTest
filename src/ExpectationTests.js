import { expect as act, test } from './xTest';

export default () => {
  test('a successful expect.toBe', ({ expect }) => {
    const resultHandlerSpy = {
      success(expectation) {
        this.successIsCalledWith = expectation;
      },
    };

    act(true, resultHandlerSpy).toBe(true);

    expect(resultHandlerSpy.successIsCalledWith).toBe({
      expected: true,
      actual: true,
    });
  });

  test('a failure expect.toBe', ({ expect }) => {
    const resultHandlerSpy = {
      fail(expectation) {
        this.failIsCalledWith = expectation;
      },
    };

    act(true, resultHandlerSpy).toBe(false);

    expect(resultHandlerSpy.failIsCalledWith).toBe({
      expected: false,
      actual: true,
    });
  });

  test('a failure expect.toBeDefined', ({ expect }) => {
    const resultHandlerSpy = {
      fail(expectation) {
        this.failIsCalledWith = expectation;
      },
    };

    act(undefined, resultHandlerSpy).toBeDefined();

    expect(resultHandlerSpy.failIsCalledWith).toBe({
      expected: 'to be defined',
      actual: undefined,
    });
  });

  test('a successful expect.toBeDefined', ({ expect }) => {
    const resultHandlerSpy = {
      success(expectation) {
        this.successIsCalledWith = expectation;
      },
    };

    act(true, resultHandlerSpy).toBeDefined();

    expect(resultHandlerSpy.successIsCalledWith).toBe({
      expected: 'to be defined',
      actual: true,
    });
  });
};
