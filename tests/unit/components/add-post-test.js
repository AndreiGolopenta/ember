import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('add-post', 'Unit | Component | add post', {
    unit: true,
});

test('disabled - computed property', function (assert) {
    let component = this.subject({ title: 'foo', body: 'bar' });

    assert.equal(component.get('title'), 'foo', 'initial title');
    assert.equal(component.get('body'), 'bar', 'initial title');
    assert.equal(
        component.get('disabled'),
        '',
        'result should be empty string'
    );

    component.set('title', '');
    assert.equal(
        component.get('disabled'),
        'disabled',
        'result should be disabled'
    );

    component.set('title', 'foo');
    component.set('body', '');
    assert.equal(
        component.get('disabled'),
        'disabled',
        'result should be disabled'
    );

    component.set('title', '');
    component.set('body', '');
    assert.equal(
        component.get('disabled'),
        'disabled',
        'result should be disabled'
    );
});
