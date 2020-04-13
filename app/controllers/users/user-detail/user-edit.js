import Ember from 'ember';

const {
    Controller,
    computed: { alias },
    $,
    inject: { service },
    get,
    computed,
    set,
} = Ember;

function utility() {
    const service = get(this, 'service');
    const id = service.getId();
    set(this, 'firstName', get(this, 'user.firstName'));
    set(this, 'lastName', get(this, 'user.lastName'));
    set(this, 'email', get(this, 'user.email'));
    set(this, 'points', get(this, 'user.points'));
    set(this, 'status', get(this, 'user.online'));
    this.transitionToRoute(`/users/${id}`);
}

export default Controller.extend({
    user: alias('model.user'),
    service: service('selected-user'),
    formValid: true,

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

    actions: {
        submit() {
            set(this, 'user.firstName', get(this, 'firstName'));
            set(this, 'user.lastName', get(this, 'lastName'));
            set(this, 'user.email', get(this, 'email'));
            set(this, 'user.points', get(this, 'points'));
            set(this, 'user.online', get(this, 'status'));
            utility.call(this);
        },

        goBack() {
            utility.call(this);
        },

        handleInput(value) {
            const firstName = $('#firstName').val();
            const lastName = $('#lastName').val();
            const email = $('#email').val();
            const points = $('#points').val();
            const formValid = [firstName, lastName, email, points].filter(
                (input) => input.length !== 0
            ).length;
            if (formValid !== 4) {
                set(this, 'formValid', false);
            } else {
                set(this, 'formValid', true);
            }

            switch (value) {
                case 'firstName': {
                    set(this, value, firstName);
                    return;
                }
                case 'lastName': {
                    set(this, value, lastName);
                    return;
                }
                case 'email': {
                    set(this, value, email);
                    return;
                }
                case 'points': {
                    set(this, value, points);
                    return;
                }
            }
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
