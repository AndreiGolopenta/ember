import DS from 'ember-data';
import Ember from 'ember';
const { get } = Ember;
const { RESTAdapter } = DS;

const props = ['id', 'firstName', 'lastName', 'email', 'points', 'online'];

export default RESTAdapter.extend({
    host: 'http://localhost:3000',

    pathForType() {
        return 'users';
    },

    createRecord(store, type, snapshot) {
        const data = snapshot.record.getProperties(...props);
        const url = `${get(this, 'host')}/users`;
        return this.ajax(url, 'POST', { data });
    },

    deleteRecord(store, type, snapshot) {
        const id = snapshot.id;
        const url = `${get(this, 'host')}/users/${id}`;
        return this.ajax(url, 'DELETE').then((response) =>
            Object.keys(response).length === 0 ? null : response
        );
    },

    updateRecord(store, type, snapshot) {
        const userId = snapshot.record.get('id');
        const url = `${get(this, 'host')}/users/${userId}`;
        const data = snapshot.record.getProperties(...props);
        return this.ajax(url, 'PUT', { data });
    },

    shouldReloadAll() {
        return true;
    },

    shouldBackgroundReloadRecord() {
        return false;
    },
});
