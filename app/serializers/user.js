import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
    isNewSerializerAPI: true,
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { users: payload };
        payload.users.forEach((user) => {
            user.compare = false;
            user.favorite = false;
        });
        return this._super(store, primaryModelClass, payload, id, requestType);
    },

    normalizeSingleResponse(
        store,
        primaryModelClass,
        payload,
        id,
        requestType
    ) {
        payload = { user: payload };
        payload.user.compare = false;
        payload.user.favorite = false;
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
