import React from 'react';
import styled from 'styled-components';


const BoxIcon = styled.div`
  .bx {
    font-size: ${({ size }) => size || '50px'};
  }
`;
const Logo = ({ size }) => {
  return (
    <BoxIcon>
      <i className='bx bx-collapse-alt' size={size}></i>
    </BoxIcon>
  );
}

export default Logo;
