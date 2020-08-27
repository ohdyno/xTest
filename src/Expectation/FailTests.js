import { fail, test } from '../xTest';

export default () => {
  test('fail reports a failure to the result handler', ({ expect }) => {
    const resultHandlerSpy = {
      fail(result) {
        this.isCalledWith = result;
      },
    };

    fail('some message', resultHandlerSpy);

    expect(resultHandlerSpy.isCalledWith).toBe({
      message: 'some message',
    });
  });
};
