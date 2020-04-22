import Ember from 'ember';

const {
    Controller,
    computed: { alias },
    get,
    set,
} = Ember;

export default Controller.extend({
    user: alias('model'),
    title: '',
    body: '',
    message: '',
    messageType: '',
    popUp: false,

    showHidePopUp(message, messageType) {
        set(this, 'messageType', messageType);
        set(this, 'popUp', true);
        set(this, 'message', message);
        setTimeout(() => set(this, 'popUp', false), 3000);
    },

    actions: {
        handleGoBack() {
            this.transitionToRoute('users');
            set(this, 'title', '');
            set(this, 'body', '');
        },

        handleRemoveUser(user) {
            this.transitionToRoute('users');
            this.store.deleteRecord(user);
            user.save();
        },

        handleEditUSer() {
            const user = get(this, 'user');
            const id = user.id;
            this.transitionToRoute(`/users/${id}/edit`, user);
        },

        deletePost(post) {
            post.deleteRecord();
            post.save();
        },

        addPost(title, body) {
            const posts = this.store.peekAll('post').map((post) => post.id);
            const id = Math.max(...posts) + 1;
            const userId = parseInt(get(this, 'user').id);
            const post = { id, userId, title, body };

            let newPost = this.store.createRecord('post', post);
            newPost
                .save()
                .then(() => {
                    this.showHidePopUp(
                        'The post has been successfully created',
                        'success'
                    );
                })
                .catch((error) => {
                    const err = error.errors[0].title;
                    this.showHidePopUp(err, 'fail');
                });
            set(this, 'title', '');
            set(this, 'body', '');
        },
    },
});
