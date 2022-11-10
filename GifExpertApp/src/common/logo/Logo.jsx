import React from 'react';
import styled from 'styled-components';


const LogoStyle = styled.img`
  height: ${({ size }) => size || '50px'};
`;
const Logo = () => {
  return (
    <>
      <LogoStyle src="https://cdn-icons-png.flaticon.com/512/5170/5170996.png" alt="logo" />
    </>
  );
}

export default Logo;
