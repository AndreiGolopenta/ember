import Ember from 'ember';

const { Service } = Ember;

export default Service.extend({
    users: null,

    init() {
        this._super(...arguments);
        this.set('users', []);
    },

    add(user) {
        this.get('users').pushObject(user);
    },

    remove(user) {
        this.get('users').removeObject(user);
    }
});
