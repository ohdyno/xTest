import { expect as act, test } from './xTest';
import { ExpectationResultHandlerSpy } from './TestDoubles';

export default () => {
  test('a successful expect', ({ expect }) => {
    const resultHandlerSpy = ExpectationResultHandlerSpy.createForSuccessCase();

    act(true, resultHandlerSpy).toBe(true);

    expect(resultHandlerSpy.successIsCalledWith).toBe({
      expected: true,
      actual: true,
    });
  });

  test('a failure expect', ({ expect }) => {
    const resultHandlerSpy = ExpectationResultHandlerSpy.createForFailureCase();

    act(true, resultHandlerSpy).toBe(false);

    expect(resultHandlerSpy.failIsCalledWith).toBe({
      expected: false,
      actual: true,
    });
  });
};
