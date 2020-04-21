import Ember from 'ember';

const { Component, get, computed } = Ember;

export default Component.extend({
    classNames: ['user-posts'],

    posts: computed('user.posts.@each.id', 'user.posts.[]', {
        get() {
            const posts = get(this, 'user.posts');
            return posts.map((post) => post).sort((a, b) => b.id - a.id);
        },
    }),

    actions: {
        deletePost(post) {
            const handleDeletePost = get(this, 'handleDeletePost');
            handleDeletePost(post);
        },
    },
});
