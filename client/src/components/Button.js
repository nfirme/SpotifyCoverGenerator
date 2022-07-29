import styled from 'styled-components';
import Color from 'color';
import { theme } from '../styles';

const Button = styled.button`
  background: ${props => props.color};
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

export default Button;
