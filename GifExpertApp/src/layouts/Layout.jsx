import React from 'react';
import styled from 'styled-components';
import Header from './header/Header';

const LayoutStyled = styled.div`
  
`;

const Wrapper = styled.div`
  
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <Wrapper >
        {children}
      </Wrapper>

    </LayoutStyled>
  );
}

export default Layout;
