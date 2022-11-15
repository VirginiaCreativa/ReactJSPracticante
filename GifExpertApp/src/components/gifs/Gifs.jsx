import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CardItem, Title } from '../../common/common';


const GifsComponent = () => {
  const palabra = useSelector(state => state.search.palabra);
  const fetchcatogires = useSelector(state => state.categores.categories);

  useEffect(() => {
    console.log(fetchcatogires);
  });

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
