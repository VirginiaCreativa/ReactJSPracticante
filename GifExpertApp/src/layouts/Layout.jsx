import React from 'react';
import styled from 'styled-components';
import Header from './header/Header';

const Wrapper = styled.div`

`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>

    </div>
  );
}

export default Layout;
