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

export default () => {
  successCase();
};
