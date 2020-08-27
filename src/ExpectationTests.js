import { expect } from './xTest';
import { ExpectationResultHandlerSpy } from './TestDoubles';

function successCase() {
  const resultHandlerSpy = ExpectationResultHandlerSpy.createForSuccessCase();

  expect(true, resultHandlerSpy).toBe(true);
  expect(resultHandlerSpy.successIsCalled).toBe(true);
  expect(resultHandlerSpy.successIsCalledWithMessage).toBe({
    expected: true,
    actual: true,
  });
}

function failCase() {
  const resultHandlerSpy = ExpectationResultHandlerSpy.createForFailureCase();

  expect(true, resultHandlerSpy).toBe(false);
  expect(resultHandlerSpy.failIsCalled).toBe(true);
  expect(resultHandlerSpy.failIsCalledWithMessage).toBe({
    expected: false,
    actual: true,
  });
}

export default () => {
  successCase();
  failCase();
};
