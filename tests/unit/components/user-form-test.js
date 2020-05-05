import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('user-form', 'Unit | Component | user form', {
    unit: true,
});

test('Test computed properties', function (assert) {
    const user = {
        firstName: 'Foo',
        lastName: 'Bar',
        email: 'foo@bar.com',
        points: 20,
        online: true,
    };
    const component = this.subject({ user });
    const message = 'Test computed property for';

    assert.equal(component.get('firstName'), 'Foo', `${message} firstName`);

    assert.equal(component.get('lastName'), 'Bar', `${message} lastName`);

    assert.equal(component.get('email'), 'foo@bar.com', `${message} email`);

    assert.equal(component.get('points'), 20, `${message} points`);

    assert.equal(component.get('status'), true, `${message} status`);

    assert.equal(component.get('formValid'), true, `${message} formValid`);

    component.set('firstName', '');
    assert.equal(component.get('formValid'), false, `${message} formValid`);
});
