import { test } from './xTest';
import { test as t } from './TestCase/TestCase';

export default () => {
  t('xTest exports named test function', ({ expect }) => {
    expect(test).toBeDefined();
  });
};
