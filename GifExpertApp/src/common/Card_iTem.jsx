import styled from 'styled-components';

const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.3);
  img {
    overflow: hidden;
    margin-bottom: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  h4 {
    padding: 10px 20px;
    color: #000;
    font-size: 1.2rem;
  }
`;
export const CardItem = ({ title, image }) => {
  return (
    <>
      <BoxCard>
        <img src={image} alt={title} />
        <h4>{title || 'Desconocido'}</h4>
      </BoxCard>
    </>
  );
}