const InstaData = require('./instaData');

module.exports = {
  
  // checkAll: function(photosToDisplay, filter, searchTerm, sort, page) {
  //   return getPhotos(filter)
  //     .searchPhotos(searchTerm, photosToDisplay)
  //     .sort(function(a, b) {
  //       if (sort) return a.postTime - b.postTime;
  //     })
  //     .paginatePhotos(photosToDisplay, page);
  // }

  getPhotos: function(formFilter) {
    if (formFilter == 'All') return InstaData;

    return InstaData.filter(function(el) {
      return el.filter == formFilter;
    });
  },

  paginatePhotos: function(filteredPhotos, page) {
    return filteredPhotos.slice(page * 12 - 12, page * 12);
  },

  searchPhotos: function(searchTerm, photosToDisplay) {
    return photosToDisplay.filter(function(el) {
      return el.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        el.caption.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
};
