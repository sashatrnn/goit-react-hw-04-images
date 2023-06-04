import propTypes from 'prop-types';
import css from './Modal.module.css';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseByEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseByEscape);
  }

  handleCloseByEscape = e => {
    if (e.code !== 'Escape') return;
    this.props.closeModal();
  };

  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <>
        <div className={css.overlay} onClick={this.handleBackdrop}>
          <div className={css.modal}>
            <img src={this.props.imgSrc} alt={this.props.imgSrc} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  imgSrc: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};

export default Modal;
