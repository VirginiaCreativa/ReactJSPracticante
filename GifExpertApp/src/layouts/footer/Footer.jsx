import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  p {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterBox className='d-flex justify-content-center'>
      <p>By: Virginia Velásquez Soto</p>
    </FooterBox>
  );
}

export default Footer;
