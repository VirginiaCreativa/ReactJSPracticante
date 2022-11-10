import React from 'react';
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
  return (
    <div className='d-flex justify-content-center'>
      <SearchStyled type="text" placeholder='Buscador' value={value} />
    </div>
  );
}

export default Search;
