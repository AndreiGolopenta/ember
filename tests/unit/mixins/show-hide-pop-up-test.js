import Ember from 'ember';
import ShowHidePopUpMixin from '../../../mixins/show-hide-pop-up';
import { module, test } from 'qunit';

module('Unit | Mixin | show hide pop up');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShowHidePopUpObject = Ember.Object.extend(ShowHidePopUpMixin);
  let subject = ShowHidePopUpObject.create();
  assert.ok(subject);
});
