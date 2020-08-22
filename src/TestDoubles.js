export class ExpectationRecorderSpy {
  success(message) {
    this.successIsCalled = true;
    this.successIsCalledWithMessage = message;
  }

  fail(message) {
    this.failIsCalled = true;
    this.failIsCalledWithMessage = message;
  }
}
