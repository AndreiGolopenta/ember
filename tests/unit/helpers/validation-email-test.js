import { validationEmail } from '../../../helpers/validation-email';
import { module, test } from 'qunit';

module('Unit | Helper | validation email');

test('Case input, with no value', function (assert) {
    let result = validationEmail(['', 'input']);
    assert.equal(
        result,
        'user-edit__formControl__input user-edit__formControl__input--show'
    );
});

test('Case input, with invalid value', function (assert) {
    let result = validationEmail(['test', 'input']);
    assert.equal(
        result,
        'user-edit__formControl__input user-edit__formControl__input--show'
    );
});

test('Case input, with valid value', function (assert) {
    let result = validationEmail(['test@gmail.com', 'input']);
    assert.equal(result, 'user-edit__formControl__input');
});

test('Case default, with no value', function (assert) {
    let result = validationEmail(['', 'span']);
    assert.equal(
        result,
        'user-edit__formControl__error user-edit__formControl__error--hide'
    );
});

test('Case default, with invalid value', function (assert) {
    let result = validationEmail(['test', 'span']);
    assert.equal(
        result,
        'user-edit__formControl__error user-edit__formControl__error--show'
    );
});

test('Case default, with valid value', function (assert) {
    let result = validationEmail(['test@gmail.com', 'span']);
    assert.equal(result, 'user-edit__formControl__error');
});
