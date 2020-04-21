import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
    classNames: ['add-post'],
    tagName: 'form',

    disabled: computed('title', 'body', {
        get() {
            const title = get(this, 'title');
            const body = get(this, 'body');
            if (title === '' || body === '') {
                return 'disabled';
            } else {
                return '';
            }
        },
    }),
});
