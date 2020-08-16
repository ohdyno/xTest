import _ from 'lodash-es';

let expect = (resultRecorder) => (actual) => {
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
      resultRecorder.success(result);
      return result;
    },
    get not() {
      negated = true;
      return this;
    },
  };
};

let test = (name, t) => {
  let testCase = {};
  let success = (r) => {
    testCase.result = r;
    testCase.status = 'success';
  };

  t({ expect: expect({ success }) });

  return { ...testCase, name };
};

const xTest = (testSuiteName, testSuiteReporter = () => {}) => {
  let testCase;
  return {
    test: (name, t) => {
      let result = test(name, t);
      testCase = result;
      return result;
    },
    finish() {
      testSuiteReporter({
        name: testSuiteName,
        cases: [testCase],
      });
    },
  };
};

xTest.test = test;

export default xTest;
