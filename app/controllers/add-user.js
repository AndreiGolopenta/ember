import Ember from 'ember';

const {
    Controller
} = Ember;

export default Controller.extend({

    actions: {
        submitForm(user) {
            const users = this.store.peekAll('user').map(user => user.id);
            const id = Math.max(...users) + 1;

            const newUser = Object.assign({}, user, { id });
            this.store.createRecord('user', newUser).save();
            this.transitionToRoute('users');
        },
    },
});
