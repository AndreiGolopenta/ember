import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('post', 'Unit | Model | post', {
    needs: ['model:user'],
});

test('user relationship', function (assert) {
    const Post = this.store().modelFor('post');
    const relationship = Ember.get(Post, 'relationshipsByName').get('user');

    assert.equal(relationship.key, 'user');
    assert.equal(relationship.kind, 'belongsTo');
});
