import { expect } from './xTest';
import { ExpectationRecorderSpy } from './TestDoubles';

const recorderSpy = new ExpectationRecorderSpy();

expect(true, recorderSpy).toBe(true);
expect(recorderSpy.successIsCalled).toBe(true);
