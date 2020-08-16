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
    t.expect(true).not.toEqual(false);
  });

  t.expect(document.getElementsByClassName('test-result').length).toEqual(0);

  testSuite.finish();

  t.expect(document.getElementsByClassName('test-result').length).toEqual(1);

  let displayedTestSuites = document.getElementsByClassName('test-suite');
  t.expect(displayedTestSuites.length).toEqual(1);

  t.expect(
    displayedTestSuites[0].innerText.includes('test suite name'),
  ).toEqual(true);
});
