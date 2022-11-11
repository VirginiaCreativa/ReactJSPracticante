import React, { useState } from 'react';

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


  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={ev => { ev.preventDefault() }}>
        <SearchStyled type="text" placeholder='Buscador' value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
      </form>
    </div>
  );
}

export default Search;
