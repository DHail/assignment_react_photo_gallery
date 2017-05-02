import React from 'react';
import PhotoContainer from './PhotoContainer';

const AllPhotosContainer = props => {
  const displayPhotos = props.filteredPhotos.map(photo => {
    return <PhotoContainer data={photo} key={photo.postTime} />;
  });

  console.log(displayPhotos);

  return (
    <div className="container">
      <div className="row">
        {displayPhotos}
      </div>
    </div>
  );
};

export default AllPhotosContainer;
