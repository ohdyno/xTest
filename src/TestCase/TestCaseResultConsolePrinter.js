export class TestCaseResultConsolePrinter {
  success(result) {
    console.group(`%cTest Case Passed: ${result.name}`, 'color:green');
    console.group(`Successes`);
    result.successes.forEach((success) => {
      console.log(`${JSON.stringify(
        success,
        (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
        4,
      )}
      `);
    });
    console.groupEnd();
    console.groupEnd();
  }

  fail(result) {
    console.group(`%cTest Case Failed: ${result.name}`, 'color:red');
    console.group(`Successes`);
    result.successes.forEach((success) => {
      console.log(`${JSON.stringify(
        success,
        (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
        4,
      )}
      `);
    });
    console.groupEnd();
    console.group(`%cFailures`, 'color:red');
    result.failures.forEach((failure) => {
      console.error(`${JSON.stringify(
        failure,
        (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
        4,
      )}
      `);
    });
    console.groupEnd();
    console.groupEnd();
  }
}
