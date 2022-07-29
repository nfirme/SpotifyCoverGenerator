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

const LogoutButton = styled(Button)`
  border-radius: 30px;
  padding: 16px 32px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoutButton color={colors.green} onClick={() => logout()}>Log out</LogoutButton>
    </FooterContainer>
  );
}

export default Footer;
