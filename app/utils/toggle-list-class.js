export default function toggleListClass(event) {
    event.stopImmediatePropagation();
    if (event.target.classList.contains('filter-sort__sort-by__input')) {
        document
            .querySelector('.filter-sort__list')
            .classList.toggle('filter-sort__list--active');
    } else {
        document
            .querySelector('.filter-sort__list')
            .classList.remove('filter-sort__list--active');
    }
}
