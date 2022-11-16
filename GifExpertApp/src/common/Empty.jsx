import React from 'react';
import styled from 'styled-components';
import GifEmpty from '../assets/video/empty.gif';

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  justify-items: center;
  margin-bottom: 40px;
  width: 100vw;
`;
export const Empty = () => {
  return (
    <EmptyBox>
      <img src={GifEmpty} height="300px" />
    </EmptyBox>
  );
}