import xTest from './xTest';

let printToDocument = (result) => {
  let testSuiteReport = document.createElement('p');
  testSuiteReport.setAttribute('class', 'test-suite');
  testSuiteReport.innerText = result.name;
  document.body.appendChild(testSuiteReport);

  let testSuiteResult = document.createElement('p');
  testSuiteResult.setAttribute('class', 'test-result');
  testSuiteResult.innerText = JSON.stringify(result);
  document.body.appendChild(testSuiteResult);
};

xTest().test('print test result to document', (t) => {
  let testSuite = xTest('test suite name', printToDocument);

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
