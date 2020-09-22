import cx from 'classnames';
import React from 'react';
import SearchIcon from '../assets/search.svg';
import styles from '../styles/modules/search.module.scss';

const Search: React.FC = () => {
  const input = cx(styles.input);

  return (
    <div className={styles.inputContainer}>
      <img src={SearchIcon} alt="searchicon" className={styles.searchIcon} />
      <input className={input} type="text" />
    </div>
  );
};

export default Search;
