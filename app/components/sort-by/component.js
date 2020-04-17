import Ember from 'ember';
import toggleClassOnList from '../../utils/toggle-list-class';
const { Component, computed, get } = Ember;

export default Component.extend({
    classNames: ['filter-sort__sort-by'],

    optionSelected: computed('sortBy', {
        get() {
            const value = get(this, 'sortBy');
            return value.capitalize();
        },
    }),

    didRender() {
        this._super(...arguments);
        window.addEventListener('click', toggleClassOnList);
    },

    willDestroyElement() {
        window.removeEventListener('click', toggleClassOnList);
        this._super(...arguments);
    },
});
