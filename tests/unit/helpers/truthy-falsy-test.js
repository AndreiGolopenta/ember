import { truthyFalsy } from '../../../helpers/truthy-falsy';
import { module, test } from 'qunit';

module('Unit | Helper | truthy falsy');

test('Current index < max index', function (assert) {
    let result = truthyFalsy([2, 10]);
    assert.equal(result, false);
});

test('Current index = max index', function (assert) {
    let result = truthyFalsy([10, 10]);
    assert.equal(result, true);
});

test('Current index > max index', function (assert) {
    let result = truthyFalsy([15, 10]);
    assert.equal(result, false);
});
