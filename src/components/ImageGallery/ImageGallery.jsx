import propTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, modalOpen }) {
  return (
    <ul className={css.imageGallery}>
      {images.map((image, id) => (
        <ImageGalleryItem key={id} image={image} modalOpen={modalOpen} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
  modalOpen: propTypes.func.isRequired,
};

export default ImageGallery;
