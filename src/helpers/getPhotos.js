const InstaData = require('./instaData');

module.exports = {
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
    return photosToDisplay;
    return photosToDisplay.filter(function(el) {
      return el.username.includes(searchTerm) ||
        el.caption.includes(searchTerm);
    });
  }
};
