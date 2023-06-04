import propTypes from 'prop-types';
import css from './Modal.module.css';
import React, { useEffect } from 'react';

const Modal = ({ imgSrc, closeModal }) => {
  useEffect(() => {
    const handleCloseByEscape = e => {
      if (e.code !== 'Escape') return;
      closeModal();
    };
    document.addEventListener('keydown', handleCloseByEscape);

    return () => {
      document.removeEventListener('keydown', handleCloseByEscape);
    };
  }, [closeModal]);

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <>
      <div className={css.overlay} onClick={handleBackdrop}>
        <div className={css.modal}>
          <img src={imgSrc} alt={imgSrc} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  imgSrc: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};

export default Modal;
