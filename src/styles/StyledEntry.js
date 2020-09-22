import styled from 'styled-components';

const StyledEntry = styled.div`
  display: flex;

  span {
    white-space: nowrap;
  }

  span::after {
    content: ':';
    margin: 0 0.5em 0 0.125em;
  }
`;

export default StyledEntry;
