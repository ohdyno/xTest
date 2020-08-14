import xTest from './xTest';

xTest.test('test case', (t) => {
  let testCase = xTest.test('test name', (t) => {
    t.expect(true).toEqual(true);
  });

  t.expect(testCase.name).toEqual('test name');
  t.expect(testCase.result).toEqual({
    actual: true,
    expected: true,
    message: `Expected '${true}' to equal '${true}'`,
  });
});
