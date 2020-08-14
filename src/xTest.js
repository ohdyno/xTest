const xTest = {
  expect(actual) {
    let negated = false;
    return {
      toEqual(expected) {
        let test;
        let message;
        if (negated) {
          message = `Expected '${actual}' to not equal '${expected}'`;
          test = () => actual !== expected;
        } else {
          message = `Expected '${actual}' to equal '${expected}'`;
          test = () => actual === expected;
        }
        console.assert(test(), message);
        return {
          actual,
          expected,
          message,
        };
      },
      get not() {
        negated = true;
        return this;
      },
    };
  },
};

export default xTest;
