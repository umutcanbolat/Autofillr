import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Paytone One', Arial, Helvetica, sans-serif;
  font-weight: unset !important;
  color: ${(props) => props.theme.primaryColor};
`;

export default Title;
