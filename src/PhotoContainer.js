import React from 'react'
import InstaData from './helpers/InstaData'

const PhotoContainer = ({data}) => {
  let link = "http://www.instagram.com/";
  let stringDate = data.postTime.toString('yyy MM dd');
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <img src=`${data.imgUrl}` />
      </div>
      <div className="panel-footer">
        <p>posted by: <a href=`${link}${data.username}`>{data.username}</a></p>
        <p>comments: {data.comments}   likes: {data.likes}</p>
        <p>date posted: {stringDate}</p>
      </div>
    </div>
  )

}
