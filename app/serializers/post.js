import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
    isNewSerializerAPI: true,
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { posts: payload };
        payload.posts.forEach((post) => {
            post.user = post.userId;
            delete post.userId;
        });
        return this._super(store, primaryModelClass, payload, id, requestType);
    },

    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { post: payload };
        payload.post.user = payload.post.userId;
        delete payload.post.userId;
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
