import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <Gallery>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          img={webformatURL}
          tag={tags}
          largeImg={largeImageURL}
          openModal={openModal}
        />
      ))}
    </Gallery>
  );
};
