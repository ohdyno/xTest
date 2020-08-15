import xTest from './xTest';

xTest.test('positive test case', (t) => {
  let testCase = xTest.test('positive test case', (t) => {
    t.expect(true).toEqual(true);
  });

  t.expect(testCase.name).toEqual('positive test case');
  t.expect(testCase.result).toEqual({
    actual: true,
    expected: true,
    message: `Expected 'true' to equal 'true'`,
  });
});

xTest.test('negative test case', (t) => {
  let testCase = xTest.test('negative test case', (t) => {
    t.expect(true).not.toEqual(false);
  });

  t.expect(testCase.name).toEqual('negative test case');
  t.expect(testCase.result).toEqual({
    actual: true,
    expected: false,
    message: `Expected 'true' to not equal 'false'`,
  });
});
