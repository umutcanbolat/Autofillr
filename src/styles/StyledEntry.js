import styled from 'styled-components';

const StyledEntry = styled.div`
  display: flex;
  flex-direction: column;

  span {
    white-space: nowrap;
  }

  /* use lodash to handle camelCase  */
  /* https://lodash.com/docs/4.17.15#startCase */
  span:first-letter {
    text-transform: capitalize;
  }

  span::after {
    content: ':';
    margin: 0 0.5em 0 0.125em;
  }

  .label {
    color: #e95420;
    font-weight: bold;
  }
`;

export default StyledEntry;
