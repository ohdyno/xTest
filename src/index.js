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

xTest.expect(true).toEqual(true);
xTest.expect(true).not.toEqual(false);

let result = xTest.expect(true).toEqual(true);
xTest.expect(result.message).toEqual(`Expected '${true}' to equal '${true}'`);
xTest.expect(result.actual).toEqual(true);
xTest.expect(result.expected).toEqual(true);
