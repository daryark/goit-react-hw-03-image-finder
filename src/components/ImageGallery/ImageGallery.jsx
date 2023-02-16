import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ photos }) => {
  return (
    <Gallery>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          img={webformatURL}
          tag={tags}
          bigImg={largeImageURL}
        />
      ))}
    </Gallery>
  );
};
