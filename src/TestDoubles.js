export const ExpectationResultHandlerSpy = {
  createForSuccessCase() {
    return {
      success(message) {
        this.successIsCalled = true;
        this.successIsCalledWithMessage = message;
      },
    };
  },

  createForFailureCase() {
    return {
      fail(message) {
        this.failIsCalled = true;
        this.failIsCalledWithMessage = message;
      },
    };
  },
};
