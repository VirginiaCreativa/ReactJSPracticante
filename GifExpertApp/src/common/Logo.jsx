import styled from 'styled-components';
import Variable from '../styles/variable';

const BoxIcon = styled.div`
  display: flex;
  margin-bottom: 20px;
  .bx {
    font-size: ${({ size }) => size || '50px'};
  }
  h1 {
    font-weight: 700;
    margin-left: 10px;
    font-size: 2.9rem;
    color: ${Variable.orange_1}
  }
`;
export const Logo = ({ size }) => {
  return (
    <BoxIcon>
      <i className='bx bx-collapse-alt' size={size}></i>
      <h1>GifExpert</h1>
    </BoxIcon>
  );
}

