import Ember from 'ember';

const {
    Route,
    inject: { service },
    get,
} = Ember;

export default Route.extend({
    service: service('selected-user'),

    model() {
        const service = get(this, 'service');
        return {
            user: this.store.peekRecord('user', service.getId()),
        };
    },
});
