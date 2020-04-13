import Ember from 'ember';

const {
    Controller,
    computed,
    get,
    inject: { service },
} = Ember;

export default Controller.extend({
    service: service('selected-user'),
    searchValue: '',

    lastIndex: computed('users.[]', {
        get() {
            return get(this, 'users.length') - 1;
        },
    }),

    users: computed('model.users.[]', 'searchValue', {
        get() {
            const users = get(this, 'model.users');
            const searchValue = get(this, 'searchValue');

            return users.filter((user) => {
                return `${user.get('firstName')} ${user.get('lastName')}`
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
        },
    }),

    actions: {
        viewUserDetail(user) {
            const service = get(this, 'service');

            this.transitionToRoute('users.user-detail', user);
            service.setId(user.get('id'));
        },
    },
});
