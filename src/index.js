import xTest from './xTest';

let DOMReporter = (result) => {
  let testSuiteReport = document.createElement('ul');
  testSuiteReport.setAttribute('class', 'test-suite');
  let testSuite = document.createElement('li');
  testSuiteReport.appendChild(testSuite);
  testSuite.innerText = result.name;

  let testSuiteResults = document.createElement('ul');
  testSuiteResults.setAttribute('class', 'test-results');
  let testSuiteResult = document.createElement('li');
  testSuiteResult.setAttribute('class', 'test-result');
  testSuiteResult.innerText = result.results.name;
  let testSuiteResultDetails = document.createElement('ul');
  testSuiteResultDetails.setAttribute('class', 'test-result-details');
  let message = document.createElement('li');
  message.setAttribute('class', 'test-result-message');
  message.innerText = result.results.result.message;

  testSuiteResultDetails.appendChild(message);
  testSuiteResult.appendChild(testSuiteResultDetails);
  testSuiteResults.appendChild(testSuiteResult);
  testSuite.appendChild(testSuiteResults);
  document.body.appendChild(testSuiteReport);
};

xTest().test('print test result to document', (t) => {
  let testSuite = xTest('test suite name', DOMReporter);

  testSuite.test('negative test case', (t) => {
    t.expect('foo').not.toEqual('bar');
  });

  let displayedTestResults = document.getElementsByClassName('test-result');
  t.expect(displayedTestResults.length).toEqual(0);

  testSuite.finish();

  t.expect(displayedTestResults.length).toEqual(1);
  let displayedTestResult = displayedTestResults[0];

  t.expect(
    displayedTestResult.innerText.includes('negative test case'),
  ).toEqual(true);

  t.expect(displayedTestResult.innerText.includes('foo')).toEqual(true);
  t.expect(displayedTestResult.innerText.includes('bar')).toEqual(true);

  let displayedTestSuites = document.getElementsByClassName('test-suite');
  t.expect(displayedTestSuites.length).toEqual(1);

  t.expect(
    displayedTestSuites[0].innerText.includes('test suite name'),
  ).toEqual(true);
});
