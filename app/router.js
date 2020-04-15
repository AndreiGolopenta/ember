import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
});

Router.map(function () {
  this.route('users', function () {
      this.route('user-detail', { path: '/:id' }, function () {
          this.route('user-edit', { path: '/edit' });
      });
  });
  this.route('about');
  this.route('add-user');
  this.route('not-found', { path: '/*wildcard' });
});

export default Router;
