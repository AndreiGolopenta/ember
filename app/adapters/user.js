import DS from 'ember-data';

const { RESTAdapter } = DS;

export default RESTAdapter.extend({
    host: 'http://localhost:3000',

    pathForType() {
        return 'users';
    },

    shouldReloadAll() {
        return true;
    },
});
