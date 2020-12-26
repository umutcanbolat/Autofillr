import styled from 'styled-components';

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  white-space: nowrap;
  color: ${(props) => props.theme.primaryColor};
  font-weight: bold;

  &::after {
    content: ':';
    margin: 0 0.5em 0 0.125em;
  }
`;
