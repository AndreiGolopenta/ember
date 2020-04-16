import Ember from 'ember';
import emailCheck from '../utils/validation-email';

const { Component, get, computed } = Ember;

export default Component.extend({
    firstName: '',
    lastName: '',
    email: '',
    points: '',
    online: false,

    valid: computed('firstName', 'lastName', 'email', 'points', 'online', {
        get() {
            const firstName = get(this, 'firstName');
            const lastName = get(this, 'lastName');
            const email = get(this, 'email');
            const points = get(this, 'points');
            const online = get(this, 'online');

            let validation = [firstName, lastName, email, points, online].filter(value => value).length;
            validation = emailCheck(email) ? validation + 1 : validation;
            return validation === 6 ? true : false;
        },
    }),

    actions: {
        submitForm() {
            const firstName = get(this, 'firstName');
            const lastName = get(this, 'lastName');
            const email = get(this, 'email');
            const points = get(this, 'points');
            const online = get(this, 'online') === 'true' ? true : false;         
            const newUser = { firstName, lastName, email, points, online };
            const handleSubmit = get(this, 'handleSubmit');
            handleSubmit(newUser);
        },
    },
});
