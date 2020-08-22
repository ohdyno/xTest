import { expect } from './xTest';

class RecorderSpy {
  success() {
    this.successIsCalled = true;
  }
}

const recorderSpy = new RecorderSpy();

expect(true, recorderSpy).toBe(true);
expect(recorderSpy.successIsCalled).toBe(true);
