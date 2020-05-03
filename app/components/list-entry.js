import Ember from 'ember';
import PopUp from '../mixins/show-hide-pop-up';
const {
    Component,
    computed,
    inject: { service },
    get,
    set,
} = Ember;

export default Component.extend(PopUp, {
    tagName: 'li',
    classNames: ['user-list__content'],
    classNameBindings: ['lastComponent:user-list__content--last'],
    compareService: service('compare'),
    favoriteService: service('favorite'),
    howManyUsersInCompare: computed('compareService.users.[]', {
        get() {
            const compareService = get(this, 'compareService');
            return compareService.users.get('length');
        },
    }),

    actions: {
        compare(event) {
            const user = get(this, 'user');
            const compareValue = user.get('compare');
            const howManyUsersInCompare = get(this, 'howManyUsersInCompare');
            const compareService = get(this, 'compareService');
            const fullName = user.get('fullName');
            if (howManyUsersInCompare < 4) {
                set(user, 'compare', !compareValue);
                if (!compareValue) {
                    compareService.add(user);
                    this.showHidePopUp(`${fullName} was added`, 'success');
                } else {
                    compareService.remove(user);
                    this.showHidePopUp(`${fullName} was removed`, 'success');
                }
            } else if (compareValue) {
                compareService.remove(user);
                set(user, 'compare', !compareValue);
                this.showHidePopUp(`${fullName} was removed`, 'success');
            } else {
                event.stopPropagation();
                event.preventDefault();
                this.showHidePopUp(
                    `Only four users can be compared at once.`,
                    'fail'
                );
            }
        },

        addToFavorite() {
            const favoriteService = this.get('favoriteService');
            const user = this.get('user');
            const favorite = user.get('favorite');
            user.set('favorite', !favorite);
            if (!favorite) {
                favoriteService.add(user);
                this.showHidePopUp(
                    `${user.get('fullName')} was added to favorites`,
                    'success'
                );
            } else {
                favoriteService.remove(user);
                this.showHidePopUp(
                    `${user.get('fullName')} was removed from favorites`,
                    'fail'
                );
            }
        },
    },
});
