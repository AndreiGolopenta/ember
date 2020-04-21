import Ember from 'ember';

const { Component, computed, get, set } = Ember;

export default Component.extend({
    classNames: ['user-edit__formControl'],

    emailError: computed('inputType', {
        get() {
            const inputType = get(this, 'inputType');
            return inputType === 'email' ? true : false;
        },
    }),

    errorMessage: computed('inputType', {
        get() {
            const inputType = get(this, 'inputType');
            return inputType === 'number' ? 'are' : 'is';
        },
    }),

    textarea: computed('inputType', {
        get() {
            const inputType = get(this, 'inputType');
            return inputType === 'textarea' ? true : false;
        },
    }),

    actions: {
        toggle() {
            set(this, 'touched', true);
        },
    },
});
