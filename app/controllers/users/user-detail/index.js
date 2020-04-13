import Ember from 'ember';

const {
    Controller,
    computed: { alias },
    inject: { service },
    get,
} = Ember;

export default Controller.extend({
    user: alias('model'),
    service: service('selected-user'),

    actions: {
        handleGoBack() {
            this.transitionToRoute('users');
        },

        handleRemoveUser(user) {
            this.transitionToRoute('users');
            this.store.deleteRecord(user);
        },

        handleEditUSer() {
            const service = get(this, 'service');
            this.transitionToRoute(`/users/${service.getId()}/edit`);
        },
    },
});
