function expect(actual) {
  let negated = false;
  return {
    toEqual(expected) {
      let result = actual === expected;
      if (negated) {
        result = !result;
      }
      console.assert(result, `Expected: ${expected}. Actual: ${actual}`);
    },
    get not() {
      negated = true;
      return this;
    }
  }
}

expect(true).toEqual(true);
expect(true).not.toEqual(false);