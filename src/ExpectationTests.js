import { expect as act, test } from './xTest';

export default () => {
  test('a successful expect', ({ expect }) => {
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

  test('a failure expect', ({ expect }) => {
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
};
