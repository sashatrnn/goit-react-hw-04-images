import propTypes from 'prop-types';
import React, { useState } from 'react';
import css from './Searchbar.module.css';
import { FiSearch } from 'react-icons/fi';
import Notiflix from 'notiflix';

const Searchbar = ({ setQuery }) => {
  const [q, setQ] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (q === '') {
      return Notiflix.Notify.failure('Enter text to search');
    }
    setQuery(q);
    setQ('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <FiSearch size="23px" />
        </button>
        <input
          type="text"
          value={q}
          onChange={e => setQ(e.target.value)}
          className={css.searchFormInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  setQuery: propTypes.func.isRequired,
};

export default Searchbar;
