import Ember from 'ember';
import PopUp from '../../mixins/show-hide-pop-up';
const {
    Component,
    computed,
    inject: { service },
    get,
    set,
} = Ember;

export default Component.extend(PopUp, {
    tagList: 'ul',
    classNames: ['compare-users'],

    compareService: service('compare'),

    showButton: computed('compareService.users.[]', {
        get() {
            const compareService = this.get('compareService');
            return compareService.users.length > 1 ? true : false;
        },
    }),

    actions: {
        removeUser(user) {
            const compareService = get(this, 'compareService');
            set(user, 'compare', false);
            compareService.remove(user);
            const firstName = user.get('firstName');
            const lastName = user.get('lastName');
            this.showHidePopUp(
                `${firstName} ${lastName} was removed`,
                'success'
            );
        },

        showMessage() {
            this.showHidePopUp(
                'Please select at least two users',
                'fail'
            );
        },
    },
});
