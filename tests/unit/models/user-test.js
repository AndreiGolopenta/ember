import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('user', 'Unit | Model | user', {
    needs: ['model:post'],
});

test('user relationship', function (assert) {
    const User = this.store().modelFor('user');
    const relationship = Ember.get(User, 'relationshipsByName').get('posts');

    assert.equal(relationship.key, 'posts');
    assert.equal(relationship.kind, 'hasMany');
});
