export class TestCaseResultConsolePrinter {
  success(result) {
    console.log(`Test Case Passed:
Name: ${result.name}
Successes:
${JSON.stringify(
  result.successes,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}
Failures:
${JSON.stringify(
  result.failures,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}`);
  }

  fail(result) {
    console.error(`Test Case Passed:
Name: ${result.name}
Successes:
${JSON.stringify(
  result.successes,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}
Failures:
${JSON.stringify(
  result.failures,
  (key, value) => (typeof value === 'undefined' ? 'undefined' : value),
  4,
)}`);
  }
}
