import { Item, ItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, tag }) => {
  return (
    <Item>
      <ItemImage src={img} alt={tag} />
    </Item>
  );
};
