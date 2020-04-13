import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
    tagName: 'li',
    classNames: ['user-list__content'],
    classNameBindings: ['lastComponent:user-list__content--last'],

    fullName: computed('user.firstName', 'user.lastName', {
        get() {
            const firstName = get(this, 'user.firstName');
            const lastName = get(this, 'user.lastName');
            return `${firstName} ${lastName}`;
        },
    }),
});
