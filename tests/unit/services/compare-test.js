import { moduleFor, test } from 'ember-qunit';

moduleFor('service:compare', 'Unit | Service | compare', {});

test('it exists', function (assert) {
    let service = this.subject();
    const user = { firstName: 'Foo', lastName: 'Baz' };

    assert.equal(service.users.length, 0, 'Check initial state');

    service.add(user);
    assert.equal(service.users.length, 1, 'Test add user');

    service.remove(user);
    assert.equal(service.users.length, 0, 'Test remove user');
});
