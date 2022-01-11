import React, {useState} from 'react';
import styles from './Searchbar.module.css';

function Searchbar(props) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(value);
    setValue('');
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={styles['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={e => {
            handleChange(e);
          }}
        />
      </form>
    </header>
  );
}

export default Searchbar;