import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ modalOpen, image }) {
  const { webformatURL, largeImageURL } = image;
  return (
    <li className={css.galleryItem} onClick={() => modalOpen(largeImageURL)}>
      <img
        className={css.galleryItemImage}
        src={webformatURL}
        alt={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  modalOpen: propTypes.func.isRequired,
  image: propTypes.shape({
    webformatURL: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;