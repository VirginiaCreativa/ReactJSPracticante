import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../../common/Title';

const GifsComponent = () => {
  const palabra = useSelector(state => state.search.palabra);

  return (
    <>
      <Title title={palabra}></Title>
    </>
  );
}

export default GifsComponent;
