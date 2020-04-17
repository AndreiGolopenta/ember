import Ember from 'ember';

const {
    Controller,
    computed,
    get,
    inject: { service },
} = Ember;

export default Controller.extend({
    queryParams: ['sortBy'],
    sortBy: 'none',
    service: service('selected-user'),
    searchValue: '',

    lastIndex: computed('users.[]', {
        get() {
            return get(this, 'users.length') - 1;
        },
    }),

    users: computed('model.users.[]', 'searchValue', 'sortBy', {
        get() {
            const users = get(this, 'model.users');
            const searchValue = get(this, 'searchValue');
            const sortBy = get(this, 'sortBy');

            const filterUsers = users.filter((user) => {
                return `${user.get('firstName')} ${user.get('lastName')}`
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
            let result;
            if (sortBy) {
                let value;
                switch (sortBy) {
                    case 'online': {
                        value = true;
                        result = filterUsers.filterBy('online', value);
                        break;
                    }
                    case 'offline': {
                        value = false;
                        result = filterUsers.filterBy('online', value);
                        break;
                    }
                    case 'none': {
                        result = filterUsers;
                        break;
                    }
                }
                return result;
            } else {
                return filterUsers;
            }
        },
    }),

    actions: {
        viewUserDetail(user) {
            const service = get(this, 'service');
            service.setId(user.get('id'));
            this.transitionToRoute('users.user-detail', user);
        },
    },
});
