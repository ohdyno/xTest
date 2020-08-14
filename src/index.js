function expect(actual) {
  let negated = false;
  return {
    toEqual(expected) {
        let result = actual === expected;
        if (negated) {
            console.assert(!result, `Expected '${actual}' to not equal '${expected}'`);
        } else {
            console.assert(result, `Expected '${actual}' to equal '${expected}'`);
        }
    },
      get not() {
          negated = true;
          return this;
      },
  };
}

expect(true).toEqual(true);
expect(true).not.toEqual(false);
