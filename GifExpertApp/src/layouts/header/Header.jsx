import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/logo/Logo';

const HeaderStyled = styled.header`
  display: flex;
`;


function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <h1>GifExpert fdfaesd</h1>
      <a href="dsfsd">hola</a>
    </HeaderStyled>
  );
}

export default Header;
