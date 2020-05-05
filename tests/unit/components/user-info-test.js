import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('user-info', 'Unit | Component | user info', {
    unit: true,
});

test('computed property + actions', function (assert) {
    const component = this.subject();

    assert.equal(
        component.get('modalClass'),
        'modal__container modal__container',
        'Tested computed property modalClass'
    );

    component.set('deleteBolean', true);
    assert.equal(
        component.get('modalClass'),
        'modal__container modal__container--active',
        'Tested computed property modalClass'
    );

    component.send('openDeleteModal');
    assert.equal(
        component.get('deleteBolean'),
        true,
        'Test action openDeleteModal'
    );

    component.send('cancelRemove');
    assert.equal(
        component.get('deleteBolean'),
        false,
        'Test action cancelRemove'
    );
});
