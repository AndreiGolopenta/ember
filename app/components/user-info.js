import Ember from 'ember';

const { Component, get, computed, set, $ } = Ember;

export default Component.extend({
    classNames: ['user-info'],
    tagName: 'ul',
    deleteBolean: false,

    modalClass: computed('deleteBolean', {
        get() {
            const deleteBolean = get(this, 'deleteBolean');
            if (deleteBolean) {
                return 'modal__container modal__container--active';
            } else {
                return 'modal__container modal__container';
            }
        },
    }),

    actions: {
        goBack() {
            const goBack = get(this, 'goBack');
            goBack();
        },

        openDeleteModal() {
            set(this, 'deleteBolean', true);
        },

        handleRemoveUser(user) {
            const deleteUser = get(this, 'deleteUser');
            deleteUser(user);
        },

        cancelRemove() {
            set(this, 'deleteBolean', false);
        },

        goToeditUser() {
            const editUser = get(this, 'editUser');
            editUser();
        }
    },

    didRender() {
        this._super(...arguments);
        $('.modal--active').click((event) => {
            if (
                $(event)[0].target.className ===
                    'modal__container modal__container--active' ||
                $(event)[0].target.className === 'modal__text' ||
                $(event)[0].target.className === 'modal__actions' ||
                $(event)[0].target.tagName === 'STRONG'
            ) {
                set(this, 'deleteBolean', true);
            } else {
                set(this, 'deleteBolean', false);
            }
        });
    },

    willDestroyElement() {
        $('.modal--active').off();
        this._super(...arguments);
    },
});
