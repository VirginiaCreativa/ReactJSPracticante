import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CardItem, Empty, Loading, Title } from '../../common/common';
import { FetchCategoriesApi } from '../../redux/slices/GifCategory.Slice';

const GridGifs = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const GifsComponent = () => {
  const palabra = useSelector(state => state.search.palabra);
  const { categories, loading, empty } = useSelector(state => state.categores);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(FetchCategoriesApi(palabra));
  }, [dispatch]);

  return (
    <>
      <Title title={palabra}></Title>
      <GridGifs>
        {
          loading ? (
            <Loading />
          ) : empty ? <Empty /> : (
            categories && categories.map((item, index) =>
              <CardItem title={item.title} key={index} image={item.images.preview_gif.url}></CardItem>
            )
          )
        }

      </GridGifs>
    </>
  );
}

export default GifsComponent;
