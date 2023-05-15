class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1; // Invalid page index
    }
    const startIndex = pageIndex * this.itemsPerPage;
    // page 0 - 0 * 4 = 0 - first page starts at 0th index
    // page 1 - 1 * 4 = 4 - second page starts at the 4th index, and so on
    // armed with this we can determine how many items are on a page
    // this is important for cases when the last page might not be full
    return Math.min(this.itemCount() - startIndex, this.itemsPerPage);
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1; // Invalid item index
    }
    // divide the item index by the items per page
    // this will return the # of pages we'd have if we started counting at 0
    // and went to the given index
    // floored to round to nearest integer
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
