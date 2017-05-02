import React from 'react';
import InstaData from '../helpers/instaData';

const PhotoContainer = ({ data }) => {
  let stringDate = new Date(Number(data.postTime) * 1000);
  stringDate = stringDate.toDateString();

  return (
    <div className="panel panel-default col-sm-4">
      <div className="panel-body">
        <a href={data.link}>
          <img src={data.imgUrl} />
        </a>
      </div>
      <div className="panel-footer">
        <p>
          posted by:
          <a href={'http://www.instagram.com/' + data.username}>
            {data.username}
          </a>
        </p>
        <p>Filter: {data.filter}</p>
        <p>comments: {data.comments} likes: {data.likes}</p>
        <p>date posted: {stringDate}</p>
        <p>caption: {data.caption.substring(0, 20)}</p>
      </div>
    </div>
  );
};

export default PhotoContainer;
