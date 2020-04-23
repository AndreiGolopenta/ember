import Ember from 'ember';

const {
    Component,
    inject: { service },
    get,
    set,
    computed,
} = Ember;

export default Component.extend({
    classNames: ['users-compare'],
    compareService: service('compare'),

    show: computed('compareService.users.[]', {
        get() {
            const compareService = get(this, 'compareService');
            const length = compareService.users.length;
            return length < 2 ? false : true;
        },
    }),

    actions: {
        removeUser(user) {
            const compareService = get(this, 'compareService');
            set(user, 'compare', false);
            compareService.remove(user);
        },
    },
});
