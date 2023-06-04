import propTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';
import { FiSearch } from 'react-icons/fi';
import Notiflix from 'notiflix';

class Searchbar extends Component {
  state = {
    q: '',
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.q === '') {
      return Notiflix.Notify.failure('Enter text to search');
    }
    this.props.setQuery(this.state.q);
    this.setState({ q: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <FiSearch size="23px" />
          </button>
          <input
            type="text"
            value={this.state.q}
            onChange={e => this.setState({ q: e.target.value })}
            className={css.searchFormInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  setQuery: propTypes.func.isRequired,
};

export default Searchbar;