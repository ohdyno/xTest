import _ from 'lodash-es';

function formatMessage(negated, actual, expected) {
  if (negated) {
    return `Expected '${JSON.stringify(actual)}' to not equal '${JSON.stringify(
      expected,
    )}'`;
  } else {
    return `Expected '${JSON.stringify(actual)}' to equal '${JSON.stringify(
      expected,
    )}'`;
  }
}

function createTest(negated, actual, expected) {
  if (negated) {
    return () => !_.isEqual(actual, expected);
  } else {
    return () => _.isEqual(actual, expected);
  }
}

let expect = (resultRecorder) => (actual) => {
  let negated = false;
  return {
    toEqual(expected) {
      let message = formatMessage(negated, actual, expected);
      let test = createTest(negated, actual, expected);
      let result = {
        actual,
        expected,
        message,
      };
      if (test()) {
        resultRecorder.success(result);
      } else {
        resultRecorder.failure(result);
      }
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

  let failure = (r) => {
    testCase.result = r;
    testCase.status = 'failure';
    console.assert(false, r.message);
  };

  t({ expect: expect({ success, failure }) });

  return { ...testCase, name };
};

const xTest = (testSuiteName, testSuiteReporter = () => {}) => {
  let cases = [];
  return {
    test: (name, t) => {
      let result = test(name, t);
      cases.push(result);
      return result;
    },
    finish() {
      testSuiteReporter({
        name: testSuiteName,
        cases: cases,
      });
    },
  };
};

export default xTest;
