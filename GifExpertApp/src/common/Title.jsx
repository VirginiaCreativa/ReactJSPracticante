import styled from 'styled-components';

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    font-weight: 600;
  }
`;
export const Title = ({ title }) => {
  return (
    <TitleBox>
      <h1>{title}</h1>
    </TitleBox>
  );
}
