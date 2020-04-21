import Ember from 'ember';

const {
    Controller,
    computed: { alias },
} = Ember;

export default Controller.extend({
    user: alias('model'),

    actions: {
        handleGoBack(user) {
            this.transitionToRoute('users.user-detail', user);
        },
    },
});
