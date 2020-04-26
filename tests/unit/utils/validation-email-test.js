import validationEmail from '../../../utils/validation-email';
import { module, test } from 'qunit';

module('Unit | Utility | validation email');

test('Invalid email 1', function (assert) {
    let result = validationEmail('abc');
    assert.equal(result, false);
});

test('Invalid email 2', function (assert) {
    let result = validationEmail('abc@a');
    assert.equal(result, false);
});

test('Invalid email 3', function (assert) {
    let result = validationEmail('ab?c@a.com');
    assert.equal(result, false);
});

test('Valid email', function (assert) {
    let result = validationEmail('abc@abc.com');
    assert.equal(result, true);
});
