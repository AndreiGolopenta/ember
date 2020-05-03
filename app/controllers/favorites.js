import Ember from 'ember';
import ChangePage from '../utils/change-page';
const {
    Controller,
    computed,
    inject: { service },
} = Ember;

export default Controller.extend({
    page: 1,
    pageSlice: 0,
    numberOfPages: null,
    favoriteService: service('favorite'),
    popUpService: service('pop-up'),

    favoriteUsers: computed('favoriteService.users.[]', 'pageSlice', {
        get() {
            const pageSlice = this.get('pageSlice');
            const favoriteService = this.get('favoriteService');
            const numberOfPages = Math.ceil(favoriteService.users.length / 6);
            this.set('numberOfPages', numberOfPages);
            return favoriteService.users.slice(pageSlice, pageSlice + 6);
        },
    }),

    actions: {
        changePage(page) {
            ChangePage.call(this, page, 6);
        },

        handleRemoveFavorite() {
            const page = this.get('page');
            const numberOfPages = this.get('numberOfPages');
            const favoriteService = this.get('favoriteService');

            const check = Math.ceil(favoriteService.users.length / 6);
            if (check !== numberOfPages) {
                ChangePage.call(this, page - 1, 6);
            }
        },
    },
});
