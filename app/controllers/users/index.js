import Ember from 'ember';
import ChangePage from '../../utils/change-page';
const {
    Controller,
    computed,
    get,
    set,
    inject: { service },
} = Ember;

export default Controller.extend({
    queryParams: ['sortBy'],
    sortBy: 'none',
    searchValue: '',
    page: 1,
    pageSlice: 0,
    numberOfPages: null,
    compareService: service('compare'),

    showCompareMini: computed('compareService.users.[]', {
        get() {
            const compareService = get(this, 'compareService');
            const length = compareService.users.length;
            return length ? true : false;
        },
    }),

    lastIndex: computed('model.users.[]', {
        get() {
            return get(this, 'users.length') - 1;
        },
    }),

    users: computed('model.users.[]', 'searchValue', 'sortBy', 'pageSlice', {
        get() {
            const users = get(this, 'model.users');
            const searchValue = get(this, 'searchValue');
            const sortBy = get(this, 'sortBy');
            const pageSlice = get(this, 'pageSlice');

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
                set(this, 'numberOfPages', Math.ceil(result.length / 8));
                return result.slice(pageSlice, pageSlice + 8);
            } else {
                set(this, 'numberOfPages', Math.ceil(filterUsers.length / 8));
                return filterUsers.slice(pageSlice, pageSlice + 8);
            }
        },
    }),

    actions: {
        changePage(page) {
            ChangePage.call(this, page, 8);
        },
    },
});
