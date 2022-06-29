import { createGlobalStyle } from 'styled-components';
import theme from './theme';
const { colors, fonts, fontSizes } = theme;

const GlobalStyles = createGlobalStyle`
  html { 
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }

  body {
    min-height: 100%;
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    background-color: ${colors.black};
    color: ${colors.white}
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.25em;
    margin: 0 0 10px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: ${theme.transition};
    cursor: pointer;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  svg {
    fill: currentColor;
  }
`;

export default GlobalStyles;
