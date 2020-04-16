import Ember from 'ember';
import navigateBack from '../utils/navigate-back';
import regexCheck from '../utils/validation-email';

const {
    Component,
    computed,
    inject: { service },
    get,
    set,
    $,
} = Ember;

export default Component.extend({
    service: service('selected-user'),

    firstName: computed('user.firstName', {
        get() {
            return get(this, 'user.firstName');
        },
    }),
    lastName: computed('user.lastName', {
        get() {
            return get(this, 'user.lastName');
        },
    }),
    email: computed('user.email', {
        get() {
            return get(this, 'user.email');
        },
    }),
    points: computed('user.points', {
        get() {
            return get(this, 'user.points');
        },
    }),
    status: computed('user.online', {
        get() {
            return get(this, 'user.online');
        },
    }),

    formValid: computed('firstName', 'lastName', 'email', 'points', {
        get() {
            const firstName = get(this, 'firstName');
            const lastName = get(this, 'lastName');
            const email = get(this, 'email');
            const points = get(this, 'points');
            let valid = [firstName, lastName, email, points].filter(
                (input) => input.length !== 0
            ).length;

            valid = regexCheck(email) ? valid + 1 : valid;
            return valid === 5 ? true : false;
        },
    }),

    actions: {
        submit() {
            set(this, 'user.firstName', get(this, 'firstName'));
            set(this, 'user.lastName', get(this, 'lastName'));
            set(this, 'user.email', get(this, 'email'));
            set(this, 'user.points', get(this, 'points'));
            set(this, 'user.online', get(this, 'status'));
            const user = get(this, 'user');
            user.save();
            navigateBack.call(this);
        },

        handleGoBack() {
            navigateBack.call(this);
        },

        radioBtn() {
            const input = $('input:checked').val();
            switch (input) {
                case 'true': {
                    set(this, 'status', true);
                    return;
                }
                case 'false': {
                    set(this, 'status', false);
                    return;
                }
            }
        },
    },
});
