import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            users: this.store.findAll('user'),
        };
    },
});
