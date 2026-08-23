import styled from 'styled-components';

export const Divider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid ${(props) => props.theme.border};
`;
