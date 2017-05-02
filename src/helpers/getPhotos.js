const InstaData = require('./instaData');

module.exports = {
  getPhotos: function(formFilter) {
    if (formFilter == 'All') return InstaData;

    return InstaData.map(function(el) {
      if (el.filter == formFilter) {
        return el;
      }
    });
  }
};
