username, post time, comment count, like count

let posts = [];

data.map(function(el) {
  return {username: el.caption.from.username,
  comments: el.comments.count,
  likes: el.likes.count,
  postTime: el.caption.created_time,
  imgUrl: el.images.low_resolution}
})


{
  "attribution": null,
  "tags": [],
  "type": "image",
  "location": null,
      "comments": {
        "count": 62,
        "data": [
          {
            "created_time": "1440699436",
            "text": "@bernadogann",
            "from": {
              "username": "yagmuratav",
              "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11252367_450327991803984_594320170_a.jpg",
              "id": "277822033",
              "full_name": "Yağmur Atav"
            },
            "id": "1060986234274353451"
          }
        ]
      },
  "filter": "Normal",
  "created_time": "1440696547",
  "link": "https://instagram.com/p/65S1D8AJKt/",
        "likes": {
          "count": 7677,
          "data": [
            {
              "username": "dali_ala",
              "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/s150x150/11950668_1080544918624669_968459361_a.jpg",
              "id": "2147856286",
              "full_name": ""
            }
          ]
        },
"images": {
  "low_resolution": {
    "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/11934634_844560522259226_320398962_n.jpg",
    "width": 320,
    "height": 320
  },
  "thumbnail": {
    "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e35/11934634_844560522259226_320398962_n.jpg",
    "width": 150,
    "height": 150
  },
  "standard_resolution": {
    "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11934634_844560522259226_320398962_n.jpg",
    "width": 640,
    "height": 640
  }
},
  "users_in_photo": [
    {
      "position": {
        "y": 0.972,
        "x": 0.934640519
      },
      "user": {
        "username": "ialbeshari",
        "profile_picture": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/s150x150/11249787_1635104710107137_1129673237_a.jpg",
        "id": "193652315",
        "full_name": "Ibrahim Albeshari"
      }
    }
  ],
        "caption": {
          "created_time": "1440696547",
          "text": "Picture: @ialbeshari",
          "from": {
            "username": "thisisamans.world",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/11809655_1657096704507515_1715105450_a.jpg",
            "id": "290825035",
            "full_name": ""
          },
    "id": "1060962000122713031"
  },
  "user_has_liked": false,
  "id": "1060961998419825325_290825035",
  "user": {
    "username": "thisisamans.world",
    "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/11809655_1657096704507515_1715105450_a.jpg",
    "id": "290825035",
    "full_name": ""
  }
}
