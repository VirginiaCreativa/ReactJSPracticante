import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../../common/Cards/Card_iTem';
import Title from '../../common/Title';


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
