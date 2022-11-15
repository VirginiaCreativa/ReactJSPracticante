import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardItem, Title } from '../../common/common';
import { FetchCategoriesApi } from '../../redux/slices/GifCategory.Slice';


const GifsComponent = () => {
  const palabra = useSelector(state => state.search.palabra);
  const { categories } = useSelector(state => state.categores);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(FetchCategoriesApi());
  }, [dispatch]);

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
