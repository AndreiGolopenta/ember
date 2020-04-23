import Ember from 'ember';

const {
    Component,
    computed,
    get,
    inject: { service },
} = Ember;

export default Component.extend({
    classNameBindings: [
        'successOrFail:pop-up:pop-up',
        'successOrFail:pop-up--success:pop-up--fail',
    ],

    popUpService: service('pop-up'),

    successOrFail: computed('popUpService.messageType', {
        get() {
            const popUpService = get(this, 'popUpService');
            const messageType = popUpService.messageType;
            return messageType === 'success' ? true : false;
        },
    }),
});
