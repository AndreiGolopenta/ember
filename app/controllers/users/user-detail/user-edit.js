import Ember from 'ember';

const {
    Controller,
    computed: { alias }
} = Ember;

export default Controller.extend({
    user: alias('model.user'),

    actions: {
        handleGoBack(id) {
            this.transitionToRoute(`/users/${id}`);
        },
    },
});
