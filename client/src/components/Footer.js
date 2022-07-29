import styled from 'styled-components';
import Button from './Button';
import { logout } from '../auth';
import { theme } from '../styles';
const { colors } = theme;

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <Button color={colors.green} onClick={() => logout()}>Log out</Button>
    </FooterContainer>
  );
}

export default Footer;
