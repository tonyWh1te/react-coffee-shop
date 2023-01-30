import { useState } from 'react';
import './Search.scss';

function Search({ onUpdateSearch }) {
  const [value, setValue] = useState('');

  const onChangeValue = (e) => {
    const value = e.target.value;
    setValue(value);
    onUpdateSearch(value);
  };

  return (
    <input type="text" className="choice-goods__form-input" id="search" placeholder="start typing here..." onChange={onChangeValue} value={value} />
  );
}

export default Search;
