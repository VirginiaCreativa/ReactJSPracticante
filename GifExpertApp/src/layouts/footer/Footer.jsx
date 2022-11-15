import styled from 'styled-components';

const FooterBox = styled.footer`
  margin-top: 60px;
  p {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterBox className='d-flex justify-content-center'>
      <p>By: Virginia Velásquez Soto</p>
    </FooterBox>
  );
}

export default Footer;
