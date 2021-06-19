import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.1rem 0;
  font-size: medium;
  padding-bottom: 0.8rem;

  &:focus {
    border: none;
  }

  background: ${(props) => props.theme.background};
`;

export default Input;
