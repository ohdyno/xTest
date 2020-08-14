import xTest from './xTest';

xTest.expect(true).toEqual(true);
xTest.expect(true).not.toEqual(false);

let result = xTest.expect(true).toEqual(true);
xTest.expect(result.message).toEqual(`Expected '${true}' to equal '${true}'`);
xTest.expect(result.actual).toEqual(true);
xTest.expect(result.expected).toEqual(true);
