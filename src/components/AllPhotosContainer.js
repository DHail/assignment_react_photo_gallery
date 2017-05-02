import React from 'react'
import PhotoContainer from './PhotoContainer'

const AllPhotosContainer = (props) => {
    // console.log("Props: ", props)
    const displayPhotos = props.filteredPhotos.map( (photo) => {
      // console.log("Photo: ", photo);
      return <PhotoContainer data={photo} />
    })
  // console.log("Display Photos: ", displayPhotos)
  return (
    <div>{displayPhotos}</div>
  )
}

export default AllPhotosContainer