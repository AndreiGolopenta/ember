import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('users-compare', 'Unit | Component | users compare', {
    needs: ['service:compare'],
    unit: true,
});

test('Test computed property show', function (assert) {
    const component = this.subject();
    
    assert.equal(component.get('show'), false, 'Test computed property');
});
