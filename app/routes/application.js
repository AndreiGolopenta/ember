import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            users: this.store.findAll('user'),
            posts: this.store.findAll('post'),
        });
    },
});
