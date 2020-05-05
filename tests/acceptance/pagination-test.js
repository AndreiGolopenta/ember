import { test } from 'qunit';
import moduleForAcceptance from 'ember-workshop-boilerplate/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pagination');

test('Change page', function (assert) {
    visit('/users');
    click('button.user-list__pagination__next');

    andThen(function () {
        assert.equal(
            find('.user-list__pagination__input').val(),
            '2',
            'Current page'
        );
    });

    click('button.user-list__pagination__prev');

    andThen(function () {
      assert.equal(
          find('.user-list__pagination__input').val(),
          '1',
          'Current page'
      );
  });
});
