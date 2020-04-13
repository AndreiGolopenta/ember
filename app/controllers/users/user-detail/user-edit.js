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

export default Controller.extend({
    user: alias('model'),
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

    actions: {
        submit() {
            set(this, 'user.firstName', get(this, 'firstName'));
            set(this, 'user.lastName', get(this, 'lastName'));
            set(this, 'user.email', get(this, 'email'));
            set(this, 'user.points', get(this, 'points'));
            set(this, 'user.online', get(this, 'status'));
        },

        goBack() {
            const service = get(this, 'service');
            const id = service.getId();
            this.transitionToRoute(`/users/${id}`);
        },

        handleInput(value) {
            const firstName = $('#firstName').val();
            const lastName = $('#lastName').val();
            const email = $('#email').val();
            const points = $('#points').val();

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
