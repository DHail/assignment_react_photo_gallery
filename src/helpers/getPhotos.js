const InstaData = require('./instaData');

module.exports = {
  getPhotos: function(formFilter) {
    if (formFilter == 'All') return InstaData;

    return InstaData.filter(function(el) {
      return el.filter == formFilter;
    });
  }
};
