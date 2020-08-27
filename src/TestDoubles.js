export const ExpectationResultHandlerSpy = {
  createForSuccessCase() {
    return {
      success(expectation) {
        this.successIsCalledWith = expectation;
      },
    };
  },

  createForFailureCase() {
    return {
      fail(expectation) {
        this.failIsCalledWith = expectation;
      },
    };
  },
};
