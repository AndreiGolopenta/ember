import Ember from 'ember';

const { Component, get } = Ember;

export default Component.extend({
    classNames: ['user-list__pagination'],
    actions: {
        updatePage() {
            const handleChangePage = get(this, 'handleChangePage');
            const page = get(this, 'page');
            handleChangePage(page);
        },

        previousPage() {
            const page = get(this, 'page');
            if (page - 1 >= 1) {
                const handleChangePage = get(this, 'handleChangePage');
                handleChangePage(page - 1);
            }
        },

        nextPage() {
            const page = get(this, 'page');
            const numberOfPages = get(this, 'numberOfPages');
            if (page + 1 <= numberOfPages) {
                const handleChangePage = get(this, 'handleChangePage');
                handleChangePage(page + 1);
            }
        },
    },
});
