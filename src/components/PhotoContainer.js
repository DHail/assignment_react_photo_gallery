import React from 'react';
import InstaData from '../helpers/instaData';

const PhotoContainer = ({ data }) => {
  console.log("Data: ", data)
  console.log("Post Time: ", data.postTime);
  let stringDate = new Date(Number(data.postTime));
  stringDate = stringDate.toDateString();

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <a href={data.link}><img src={data.imgUrl} /></a>
      </div>
      <div className="panel-footer">
        <p>
          posted by:
          <a href={'http://www.instagram.com/' + data.username}>
            {data.username}
          </a>
        </p>
        <p>comments: {data.comments} likes: {data.likes}</p>
        <p>date posted: {stringDate}</p>
      </div>
    </div>
  );
};

export default PhotoContainer;
