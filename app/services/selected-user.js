import Ember from 'ember';

const { Service, set, get } = Ember;

export default Service.extend({
    userId: null,

    setId(id) {
        set(this, 'userId', id);
    },

    getId() {
        return get(this, 'userId');
    },
});
