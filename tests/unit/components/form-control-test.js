import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form-control', 'Unit | Component | form control', {
    unit: true,
});

test('Test computed properties', function (assert) {
    const component = this.subject({ inputType: 'email', touched: false });

    assert.equal(component.get('emailError'), true, 'Test for case email');

    component.set('inputType', 'foo');
    assert.equal(component.get('emailError'), false, 'Test for case email');

    component.set('inputType', 'textarea');
    assert.equal(component.get('textarea'), true, 'test for case textarea');

    component.set('inputType', 'foo');
    assert.equal(component.get('textarea'), false, 'test for case textarea');

    component.set('inputType', 'number');
    assert.equal(
        component.get('errorMessage'),
        'are',
        'test for case textarea'
    );

    component.set('inputType', 'foo');
    assert.equal(component.get('errorMessage'), 'is', 'test for case textarea');

    assert.equal(component.get('touched'), false, 'test for action toggle');
    component.send('toggle');
    assert.equal(component.get('touched'), true, 'test for action toggle');
});
