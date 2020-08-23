import { expect } from './xTest';
import { ExpectationResultHandlerSpy } from './TestDoubles';

function successCase() {
  const resultHandlerSpy = ExpectationResultHandlerSpy.createForSuccessCase();

  expect(true, resultHandlerSpy).toBe(true);
  expect(resultHandlerSpy.successIsCalled).toBe(true);
  expect(resultHandlerSpy.successIsCalledWithMessage).toBe(
    'Expected\ntrue\nto be\ntrue',
  );
}

function failCase() {
  const resultHandlerSpy = ExpectationResultHandlerSpy.createForFailureCase();

  expect(true, resultHandlerSpy).toBe(false);
  expect(resultHandlerSpy.failIsCalled).toBe(true);
  expect(resultHandlerSpy.failIsCalledWithMessage).toBe(
    'Expected\ntrue\nto be\nfalse',
  );
}

export default () => {
  successCase();
  failCase();
};
