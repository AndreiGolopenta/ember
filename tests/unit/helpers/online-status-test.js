import { onlineStatus } from '../../../helpers/online-status';
import { module, test } from 'qunit';

module('Unit | Helper | online status');

test('Check for user.online is true', function (assert) {
    let result = onlineStatus([true]);
    assert.equal(result, 'Online');
});

test('Check for user.online is false', function (assert) {
    let result = onlineStatus([false]);
    assert.equal(result, 'Offline');
});
