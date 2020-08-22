import { expect } from './xTest';
import { ExpectationResultHandlerSpy } from './TestDoubles';

function successCase() {
  const resultHandlerSpy = new ExpectationResultHandlerSpy();

  expect(true, resultHandlerSpy).toBe(true);
  expect(resultHandlerSpy.successIsCalled).toBe(true);
  expect(resultHandlerSpy.successIsCalledWithMessage).toBe(
    'Expected true to be true',
  );
}

function failCase() {
  const resultHandlerSpy = new ExpectationResultHandlerSpy();

  try {
    expect(true, resultHandlerSpy).toBe(false);
  } catch (e) {
  } finally {
    expect(resultHandlerSpy.failIsCalled).toBe(true);
    expect(resultHandlerSpy.failIsCalledWithMessage).toBe(
      'Expected true to be false',
    );
  }
}

export default () => {
  successCase();
  failCase();
};
