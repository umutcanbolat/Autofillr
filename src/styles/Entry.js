import styled from 'styled-components';

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  white-space: nowrap;
  color: #e95420;
  font-weight: bold;

  /* use lodash to handle camelCase  */
  /* https://lodash.com/docs/4.17.15#startCase */
  &:first-letter {
    text-transform: capitalize;
  }

  &::after {
    content: ':';
    margin: 0 0.5em 0 0.125em;
  }
`;
