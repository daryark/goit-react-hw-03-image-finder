import { Component } from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = () => {
  return (
    // const { id, webformatURL, largeImageURL } = this.props.photos;
    // console.log(photos);
    <>
      <Gallery>
        <ImageGalleryItem>hii</ImageGalleryItem>
        {/* {photos.map(photo => (
            <ImageGalleryItem>{photo}</ImageGalleryItem>
          ))} */}
      </Gallery>
    </>
  );
};
