import _ from 'lodash-es';

const xTest = {
  test(name, t) {
    let testCase = {};
    testCase.expect = (actual) => {
      let negated = false;
      return {
        toEqual(expected) {
          let test;
          let message;
          if (negated) {
            message = `Expected '${JSON.stringify(
              actual,
            )}' to not equal '${JSON.stringify(expected)}'`;
            test = () => !_.isEqual(actual, expected);
          } else {
            message = `Expected '${JSON.stringify(
              actual,
            )}' to equal '${JSON.stringify(expected)}'`;
            test = () => _.isEqual(actual, expected);
          }
          console.assert(test(), message);
          let result = {
            actual,
            expected,
            message,
          };
          testCase.result = result;
          return result;
        },
        get not() {
          negated = true;
          return this;
        },
      };
    };
    t(testCase);
    return {
      name,
      result: testCase.result,
    };
  },
};

export default xTest;
