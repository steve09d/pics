import React from 'react';

import '../imageList/ImageList.css';
import ImageCard from '../util/ImageCard';

const ImageList = ({ images }) => {
  const imgsArray = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className='image-list'>{imgsArray}</div>;
};

export default ImageList;
