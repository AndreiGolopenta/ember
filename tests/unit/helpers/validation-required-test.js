import { validationRequired } from '../../../helpers/validation-required';
import { module, test } from 'qunit';

module('Unit | Helper | validation required');

test('No input value for span element', function (assert) {
    let result = validationRequired(['', 'span']);
    assert.equal(
        result,
        'user-edit__formControl__error user-edit__formControl__error--show'
    );
});

test('Input value for span element', function (assert) {
    let result = validationRequired(['test', 'span']);
    assert.equal(result, 'user-edit__formControl__error');
});

test('No input value for input element', function (assert) {
    let result = validationRequired(['', 'input']);
    assert.equal(
        result,
        'user-edit__formControl__input user-edit__formControl__input--show'
    );
});

test('Input value for input element', function (assert) {
    let result = validationRequired(['test', 'input']);
    assert.equal(result, 'user-edit__formControl__input');
});

test('No input value for label element', function (assert) {
    let result = validationRequired(['', 'label']);
    assert.equal(
        result,
        'user-edit__formControl__label user-edit__formControl__label--show'
    );
});

test('Input value for label element', function (assert) {
    let result = validationRequired(['test', 'label']);
    assert.equal(result, 'user-edit__formControl__label');
});
