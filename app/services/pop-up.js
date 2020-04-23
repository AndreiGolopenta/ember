import Ember from 'ember';

export default Ember.Service.extend({
    message: '',
    messageType: '',
    popUp: false,

    setMessage(value) {
        this.set('message', value);
    },

    setMessageType(value) {
        this.set('messageType', value);
    },

    setPopUp() {
        const popUp = this.get('popUp');
        this.set('popUp', !popUp);
    }
});
