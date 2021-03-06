import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sort-by', 'Integration | Component | sort by', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{sort-by sortBy="foo"}}`);

  assert.equal(this.$('.filter-sort__sort-by__input').val(), 'Foo', 'Uppercase the value');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#sort-by sortBy="foo"}}
      template block text
    {{/sort-by}}
  `);

  assert.equal(this.$('.filter-sort__sort-by__input').val(), 'Foo', 'Uppercase the value');
});
