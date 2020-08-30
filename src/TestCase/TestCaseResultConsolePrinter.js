export class TestCaseResultConsolePrinter {
  success(result) {
    console.group(`%c${result.name}`, 'color:green');
    result.successes.forEach((success) => {
      console.log(
        `%c${JSON.stringify(
          success,
          (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
          4,
        )}`,
        'color:green',
      );
    });
    console.groupEnd();
  }

  fail(result) {
    console.group(`%c${result.name}`, 'color:red');
    result.successes.forEach((success) => {
      console.log(
        `%c${JSON.stringify(
          success,
          (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
          4,
        )}`,
        'color:green',
      );
    });
    result.failures.forEach((failure) => {
      console.error(
        `%c${JSON.stringify(
          failure,
          (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
          4,
        )}`,
        'color:red',
      );
    });
    console.groupEnd();
  }
}
