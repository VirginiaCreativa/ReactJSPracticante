import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slices/GifCategory.Slice';
import { setPalabraSearch } from '../../redux/slices/Search.Slice';

import styled from 'styled-components';

const SearchStyled = styled.input`
  border: none;
  width: 600px;
  border-radius: 6px;
  padding: 8px 15px;
  font-size: 1.2rem;
  ::placeholder {
    font-size: 1.2rem;
    letter-spacing: -0.5px !important;
  }
`;

const Search = ({ value }) => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const handleOnSubmit = (ev) => {
    ev.preventDefault()
    dispatch(setPalabraSearch(inputValue));
    dispatch(setCategory(inputValue));
  }

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleOnSubmit}>
        <SearchStyled type="text" placeholder='Buscador' value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
      </form>
    </div>
  );
}

export default Search;
