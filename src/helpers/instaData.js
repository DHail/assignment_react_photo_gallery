const photos = require('../photos.js');

//console.log(photos.data);

let allPosts = photos.data.map(function(el) {
  return {
    username: el.user.username,
    comments: el.comments.count,
    likes: el.likes.count,
    postTime: el.created_time,
    imgUrl: el.images.low_resolution.url,
    link: el.link,
    filter: el.filter
  };
});

//console.log(allPosts);

module.exports = allPosts;
