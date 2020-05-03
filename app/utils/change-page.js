export default function changePage(page, itemsPerPage) {
    const pageSlice = this.get('pageSlice');
    const numberOfPages = this.get('numberOfPages');
    const actualPage = pageSlice / itemsPerPage + 1;
    if (!page) {
        return this.set('page', actualPage);
    } else if (page > numberOfPages) {
        return this.set('page', actualPage);
    } else if (page < 1) {
        return this.set('page', actualPage);
    } else {
        const pageSlice = (page - 1) * itemsPerPage;
        this.set('pageSlice', pageSlice);
        this.set('page', page);
    }
}
