import Ember from 'ember';
import PopUpMessage from '../../mixins/show-hide-pop-up';
const {
    Component,
    inject: { service },
} = Ember;

export default Component.extend(PopUpMessage, {
    classNames: ['favorite__card'],
    tagName: 'ul',
    favoriteService: service('favorite'),

    actions: {
        remove() {
            const user = this.get('user');
            const favoriteService = this.get('favoriteService');
            const removeFromFavorite = this.get('removeFromFavorite');

            favoriteService.remove(user);
            user.set('favorite', false);
            this.showHidePopUp(
                `${user.get('fullName')} was removed from favorites`,
                'success'
            );
            removeFromFavorite();
        },
    },
});
