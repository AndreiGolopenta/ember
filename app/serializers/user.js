import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
    isNewSerializerAPI: true,
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { users: payload };
        return this._super(store, primaryModelClass, payload, id, requestType);
    },

    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { user: payload };
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
