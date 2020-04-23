import Ember from 'ember';

const {
    Mixin,
    inject: { service },
    get,
} = Ember;

export default Mixin.create({
    popUpService: service('pop-up'),

    showHidePopUp(message, messageType) {
        const popUpService = get(this, 'popUpService');
        popUpService.setMessageType(messageType);
        popUpService.setPopUp();
        popUpService.setMessage(message);

        setTimeout(() => popUpService.setPopUp(), 1500);
    },
});
