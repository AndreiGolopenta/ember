import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
    classNameBindings: ['successOrFail:pop-up:pop-up', 'successOrFail:pop-up--success:pop-up--fail'],

    successOrFail: computed('messageType', {
        get() {
            const messageType = get(this, 'messageType');
            return messageType === 'success' ? true : false;
        },
    }),
});
