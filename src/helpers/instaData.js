const photos = require('../photos.js');

//console.log(photos.data);

let allPosts = photos.data.map(function(el) {
  if (el.caption != null) {
    return {
      username: el.user.username,
      comments: el.comments.count,
      likes: el.likes.count,
      postTime: el.created_time,
      imgUrl: el.images.low_resolution.url,
      link: el.link,
      filter: el.filter,
      caption: el.caption.text
    };
  } else {
    return {
      username: el.user.username,
      comments: el.comments.count,
      likes: el.likes.count,
      postTime: el.created_time,
      imgUrl: el.images.low_resolution.url,
      link: el.link,
      filter: el.filter,
      caption: 'I have no caption :('
    };
  }
});

//console.log(allPosts);

module.exports = allPosts;
