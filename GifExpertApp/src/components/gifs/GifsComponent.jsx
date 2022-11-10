import React from 'react';
import { useSelector } from 'react-redux';

const GifsComponent = () => {
  const palabra = useSelector(state => state.search.palabra);

  return (
    <div>
      <h2>{palabra}</h2>
    </div>
  );
}

export default GifsComponent;
