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
  return () => {
    const isEqual = _.isEqual(actual, expected);
    return negated ? !isEqual : isEqual;
  };
}

let expect = (resultRecorder) => (actual) => {
  let negated = false;
  return {
    toEqual(expected) {
      let message = formatMessage(negated, actual, expected);
      let test = createTest(negated, actual, expected);
      if (test()) {
        resultRecorder.success(message);
      } else {
        resultRecorder.failure(message);
      }
    },
    get not() {
      negated = true;
      return this;
    },
  };
};

let test = (name, t) => {
  let testCase = {};
  let success = (message) => {
    testCase.message = message;
    testCase.status = 'success';
  };

  let failure = (message) => {
    testCase.message = message;
    testCase.status = 'failure';
    console.assert(false, message);
  };

  t({ expect: expect({ success, failure }) });

  return { ...testCase, name };
};

const xTest = (testSuiteName, testSuiteReporter = () => {}) => {
  let cases = [];
  return {
    test: (name, t) => {
      cases.push(test(name, t));
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
