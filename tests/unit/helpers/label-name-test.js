import { labelName } from '../../../helpers/label-name';
import { module, test } from 'qunit';

module('Unit | Helper | label name');

test('Label for First Name', function (assert) {
    let result = labelName(['firstName']);
    assert.equal(result, 'First Name');
});

test('Label for Last Name', function (assert) {
    const result = labelName(['lastName']);
    assert.equal(result, 'Last Name');
});

test('Label for points', function (assert) {
    const result = labelName(['points']);
    assert.equal(result, 'Points');
});

test('default label', function (assert) {
    const result = labelName(['mytestlabel']);
    assert.equal(result, 'Mytestlabel');
});
