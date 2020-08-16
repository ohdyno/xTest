import xTest from './xTest';

let printToDocument = (result) => {
  let element = document.createElement('p');
  element.setAttribute('class', 'test-result');
  element.innerText = JSON.stringify(result);
  document.body.appendChild(element);
};

let deleteAll = () => {
  let results = document.getElementsByClassName('test-result');
  for (let i = 0; i < results.length; i++) {
    results[i].remove();
  }
};

xTest().test('positive test case', (t) => {
  let testCase = xTest().test('positive test case', (t) => {
    t.expect(true).toEqual(true);
  });

  t.expect(testCase.name).toEqual('positive test case');
  t.expect(testCase.result).toEqual({
    actual: true,
    expected: true,
    message: `Expected 'true' to equal 'true'`,
  });
});

xTest().test('negative test case', (t) => {
  let testCase = xTest().test('negative test case', (t) => {
    t.expect(true).not.toEqual(false);
  });

  t.expect(testCase.name).toEqual('negative test case');
  t.expect(testCase.result).toEqual({
    actual: true,
    expected: false,
    message: `Expected 'true' to not equal 'false'`,
  });
});

deleteAll();

xTest().test('print test result to document', (t) => {
  let testSuite = xTest(printToDocument);
  testSuite.test('negative test case', (t) => {
    t.expect(true).not.toEqual(false);
  });

  t.expect(document.getElementsByClassName('test-result').length).toEqual(0);

  testSuite.finish();

  t.expect(document.getElementsByClassName('test-result').length).toEqual(1);

  deleteAll();
});
