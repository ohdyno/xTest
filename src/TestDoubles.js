export class ExpectationRecorderSpy {
  success(message) {
    this.successIsCalled = true;
    this.successIsCalledWithMessage = message;
  }
}
