import DS from 'ember-data';
import Ember from 'ember';
const { get } = Ember;
const { RESTAdapter } = DS;

export default RESTAdapter.extend({
    host: 'http://localhost:3000',

    pathForType() {
        return 'posts';
    },

    createRecord(store, type, snapshot) {
        const props = ['id', 'userId', 'title', 'body'];
        const data = snapshot.record.getProperties(...props);
        data.id = parseInt(data.id);
        const url = `${get(this, 'host')}/posts`;
        return this.ajax(url, 'POST', { data });
    },

    deleteRecord(store, type, snapshot) {
        const id = snapshot.id;
        const url = `${get(this, 'host')}/posts/${id}`;
        return this.ajax(url, 'DELETE').then((response) =>
            Object.keys(response).length === 0 ? null : response
        );
    },

    shouldReloadAll() {
        return true;
    },

    shouldBackgroundReloadRecord() {
        return false;
    },
});
