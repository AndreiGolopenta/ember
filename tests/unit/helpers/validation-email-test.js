import { validationEmail } from '../../../helpers/validation-email';
import { module, test } from 'qunit';

module('Unit | Helper | validation email');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = validationEmail(42);
  assert.ok(result);
});
