import { Item, ItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, tag, largeImg, openModal }) => {
  return (
    <Item>
      <ItemImage
        src={img}
        alt={tag}
        onClick={() => openModal({ tag, largeImg })}
      />
    </Item>
  );
};
