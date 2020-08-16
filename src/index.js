import xTest from './xTest';

let DOMReporter = (completedSuite) => {
  let report = document.createElement('ul');
  report.setAttribute('class', 'test-suite');
  let suite = document.createElement('li');
  report.appendChild(suite);
  suite.innerText = completedSuite.name;

  let cases = document.createElement('ul');
  cases.setAttribute('class', 'test-cases');
  let aCase = document.createElement('li');
  aCase.setAttribute('class', 'test-case');
  aCase.innerText = completedSuite.results.name;
  let caseDetails = document.createElement('ul');
  caseDetails.setAttribute('class', 'test-case-details');
  let message = document.createElement('li');
  message.setAttribute('class', 'test-case-message');
  message.innerText = completedSuite.results.result.message;

  caseDetails.appendChild(message);
  aCase.appendChild(caseDetails);
  cases.appendChild(aCase);
  suite.appendChild(cases);
  document.body.appendChild(report);
};

xTest().test('print test result to document', (t) => {
  let testSuite = xTest('test suite name', DOMReporter);

  testSuite.test('negative test case', (t) => {
    t.expect('foo').not.toEqual('bar');
  });

  testSuite.finish();

  let testCases = document.getElementsByClassName('test-case');

  t.expect(testCases.length).toEqual(1);

  let testCase = testCases[0];
  t.expect(testCase.innerText.includes('negative test case')).toEqual(true);

  t.expect(testCase.innerText.includes('foo')).toEqual(true);
  t.expect(testCase.innerText.includes('bar')).toEqual(true);

  let displayedTestSuites = document.getElementsByClassName('test-suite');
  t.expect(displayedTestSuites.length).toEqual(1);

  t.expect(
    displayedTestSuites[0].innerText.includes('test suite name'),
  ).toEqual(true);
});
