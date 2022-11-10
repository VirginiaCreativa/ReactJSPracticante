import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/logo/Logo';
import Variable from '../../styles/variable';
import Search from '../search/Search';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 20px;
  h1 {
    font-weight: 700;
    margin-left: 10px;
    margin-bottom: 0;
    color: ${Variable.orange_1} ;
  }
`;


function Header() {
  return (
    <div className='container'>
      <HeaderStyled>
        <Logo size='70px' />
        <h1>GifExpert</h1>
      </HeaderStyled>
      <Search />
    </div>
  );
}

export default Header;
