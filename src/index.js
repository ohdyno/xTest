function expect(actual) {
  return {
    toEqual(expected) {
      console.assert(actual === expected, `Expected: ${expected}. Actual: ${actual}`);
    }
  }
}

expect(true).toEqual(true);