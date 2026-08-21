import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0 0 0.5em;
  font-family: 'Paytone One', Arial, Helvetica, sans-serif;
  font-size: 2em;
  font-weight: 400;
  color: ${(props) => props.theme.primaryColor};
`;

export default Title;
