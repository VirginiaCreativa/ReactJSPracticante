import React from 'react';
import styled from 'styled-components';
import Footer from './footer/Footer';
import Header from './header/Header';


const LayoutStyled = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 40px 0;
  height: 70vh ;
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <Wrapper className='container' >
        {children}
      </Wrapper>
      <Footer />
    </LayoutStyled>
  );
}

export default Layout;
