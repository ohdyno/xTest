function expect(actual) {
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
}

expect(true).toEqual(true);
expect(true).not.toEqual(false);

let result = expect(true).toEqual(true);
expect(result.message).toEqual(`Expected '${true}' to equal '${true}'`);
expect(result.actual).toEqual(true);
expect(result.expected).toEqual(true);
