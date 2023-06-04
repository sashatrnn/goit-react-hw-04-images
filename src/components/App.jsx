import { Component } from 'react';
import getImages from '../services/imgApi';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    imgSrc: '',
    totalHits: 0,
    isOpenModal: false,
    isLoading: false,
  };

  setQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  pageLoad = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      (prevState.query !== this.state.query && this.state.query !== '') ||
      prevState.page !== this.state.page
    ) {
      this.getSearched();
    }

    if (
      prevState.images.length !== this.state.images.length &&
      this.state.page !== 1
    ) {
      window.scrollTo({
        top: snapshot,
        behavior: 'smooth',
      });
    }
  }

  getSearched = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await getImages(this.state.query, this.state.page);
      this.setState(prev => ({
        totalHits: res.totalHits,
        images: [...prev.images, ...res.hits],
      }));
    } catch (error) {
      this.setState({ error: 'Oops, not found' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  modalOpen = largeImageURL => {
    this.setState({
      isOpenModal: true,
      imgSrc: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false, imgSrc: '' });
  };

  render() {
    const { images, isLoading, imgSrc, isOpenModal, totalHits } =
      this.state;
    return (
      <div className="App">
        <Searchbar setQuery={this.setQuery} query={this.state.query} />
        <ImageGallery images={images} modalOpen={this.modalOpen} />
        {isLoading && <Loader />}
        {images.length > 0 && totalHits > images.length && (
          <Button onClick={this.pageLoad} />
        )}
        {isOpenModal && <Modal imgSrc={imgSrc} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default App;