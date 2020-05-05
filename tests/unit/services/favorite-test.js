import { moduleFor, test } from 'ember-qunit';

moduleFor('service:favorite', 'Unit | Service | favorite', {});

test('it exists', function (assert) {
    let service = this.subject();
    const user = { firstName: 'Foo', lastName: 'Bar' };

    assert.equal(service.users.length, 0, 'Check initial state');
    service.add(user);
    assert.equal(service.users.length, 1, 'Check add user');
    service.remove(user);
    assert.equal(service.users.length, 0, 'Check remove user');
});
