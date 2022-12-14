import styled from 'styled-components';
import { Logo } from '../../common/common';
import Search from '../search/Search';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 40px;
  margin-bottom: 40px;
`;

function Header() {


  return (
    <div className='container'>
      <HeaderStyled>
        <Logo size='80px'></Logo>
        <Search />
      </HeaderStyled>
    </div>
  );
}

export default Header;
