import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('sort-by', 'Unit | Component | sort by', {
    unit: true,
});

test('Test computed property - optionSelected', function (assert) {
    let component = this.subject({ sortBy: 'foo' });

    assert.equal(
        component.get('optionSelected'),
        'Foo',
        'Capitalize the option'
    );
});
