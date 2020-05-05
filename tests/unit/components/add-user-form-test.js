import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('add-user-form', 'Unit | Component | add user form', {
    unit: true,
});

test('Test valid - computed property', function (assert) {
    let component = this.subject();

    assert.equal(component.get('valid'), false, 'Form should be false');

    component.set('firstName', 'Foo');
    assert.equal(component.get('valid'), false, 'Form should be false');

    component.set('lastName', 'Bar');
    assert.equal(component.get('valid'), false, 'Form should be false');

    component.set('email', 'bar@gmail.com');
    assert.equal(component.get('valid'), false, 'Form should be false');

    component.set('points', 20);
    assert.equal(component.get('valid'), false, 'Form should be false');

    component.set('online', true);
    assert.equal(component.get('valid'), true, 'Form should be false');
});