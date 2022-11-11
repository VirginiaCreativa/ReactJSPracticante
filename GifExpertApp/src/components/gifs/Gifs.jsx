import React from 'react';
import { useSelector } from 'react-redux';
import { CardItem, Title } from '../../common/common';


const GifsComponent = () => {
  const palabra = useSelector(state => state.search.palabra);

  return (
    <>
      <Title title={palabra}></Title>
      <div>
        <CardItem title></CardItem>
      </div>
    </>
  );
}

export default GifsComponent;
