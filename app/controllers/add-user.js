import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
    actions: {
        submitForm(user) {
            const id = this.store.peekAll('user').get('length') + 1;
            const newUser = Object.assign({}, user, { id });
            this.store.createRecord('user', newUser);
        },
    },
});
