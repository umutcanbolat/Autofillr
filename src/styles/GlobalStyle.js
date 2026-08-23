import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.text};
  }

  ::selection {
    background: ${(props) => props.theme.selection};
    text-shadow: none;
  }
`;
