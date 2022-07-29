import styled, { css } from 'styled-components';
import Color from 'color';
import { theme } from '../styles';

const baseButtonStyles = css`
  background: ${(props) => props.color};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 1em;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  border: 0;
  color: white;
  font-size: ${theme.fontSizes.base};
  transition: ${theme.transition};

  &:hover {
    background: ${(props) => Color(props.color).darken(0.2)};
  }

  &:active {
    background: ${(props) => Color(props.color).darken(0.3)};
  }
`;

const buttonStyles = css`
  ${baseButtonStyles}
  border-radius: 30px;
  padding: 16px 32px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const RealButton = styled.button`
  ${buttonStyles}
`;

const LinkButton = styled.a`
  ${buttonStyles}
`;

function Button({ href, color, children, ...rest }) {
  return href ? (
    <LinkButton href={href} color={color} {...rest}>
      {children}
    </LinkButton>
  ) : (
    <RealButton color={color} {...rest}>
      {children}
    </RealButton>
  );
}

export default Button;
