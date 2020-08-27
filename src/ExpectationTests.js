import { expect } from './xTest';
import { ExpectationResultHandlerSpy } from './TestDoubles';

function successCase() {
  const resultHandlerSpy = ExpectationResultHandlerSpy.createForSuccessCase();

  expect(true, resultHandlerSpy).toBe(true);
  expect(resultHandlerSpy.successIsCalledWith).toBe({
    expected: true,
    actual: true,
  });
}

function failCase() {
  const resultHandlerSpy = ExpectationResultHandlerSpy.createForFailureCase();

  expect(true, resultHandlerSpy).toBe(false);
  expect(resultHandlerSpy.failIsCalledWith).toBe({
    expected: false,
    actual: true,
  });
}

export default () => {
  successCase();
  failCase();
};
