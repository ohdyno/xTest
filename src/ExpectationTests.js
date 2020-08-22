import { expect } from './xTest';
import { ExpectationRecorderSpy } from './TestDoubles';

function successCase() {
  const recorderSpy = new ExpectationRecorderSpy();

  expect(true, recorderSpy).toBe(true);
  expect(recorderSpy.successIsCalled).toBe(true);
  expect(recorderSpy.successIsCalledWithMessage).toBe(
    'Expected true to be true',
  );
}

function failCase() {
  const recorderSpy = new ExpectationRecorderSpy();

  try {
    expect(true, recorderSpy).toBe(false);
  } catch (e) {
  } finally {
    expect(recorderSpy.failIsCalled).toBe(true);
    expect(recorderSpy.failIsCalledWithMessage).toBe(
      'Expected true to be false',
    );
  }
}

export default () => {
  successCase();
  failCase();
};
