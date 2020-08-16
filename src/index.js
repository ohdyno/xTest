import xTest from './xTest';

let DOMReporter = (completedSuite) => {
  let report = document.createElement('ul');
  report.setAttribute('class', 'test-suite');
  let suite = document.createElement('li');
  report.appendChild(suite);
  suite.innerText = completedSuite.name;

  let cases = document.createElement('ul');
  cases.setAttribute('class', 'test-cases');
  completedSuite.cases.forEach((testCase) => {
    let aCase = document.createElement('li');
    aCase.setAttribute('class', `test-case ${testCase.status}`);
    aCase.innerText = testCase.name;
    let caseDetails = document.createElement('ul');
    caseDetails.setAttribute('class', 'test-case-details');
    let message = document.createElement('li');
    message.setAttribute('class', 'test-case-message');
    message.innerText = testCase.result.message;
    caseDetails.appendChild(message);
    aCase.appendChild(caseDetails);
    cases.appendChild(aCase);
  });

  suite.appendChild(cases);
  document.body.appendChild(report);
};

xTest().test('print test result to document', (t) => {
  let testSuite = xTest('test suite name', DOMReporter);

  testSuite.test('test case name', (t) => {
    t.expect('foo').not.toEqual('bar');
  });

  testSuite.finish();

  let displayedTestSuites = document.getElementsByClassName('test-suite');
  t.expect(displayedTestSuites.length).toEqual(1);

  let displayedTestSuite = displayedTestSuites[0];
  t.expect(displayedTestSuite.innerText.includes('test suite name')).toEqual(
    true,
  );

  let testCases = displayedTestSuite.getElementsByClassName('test-case');

  t.expect(testCases.length).toEqual(1);

  let testCase = testCases[0];
  t.expect(testCase.getAttribute('class').includes('success')).toEqual(true);
  t.expect(testCase.innerText.includes('test case name')).toEqual(true);
  t.expect(testCase.innerText.includes('foo')).toEqual(true);
  t.expect(testCase.innerText.includes('bar')).toEqual(true);
});
