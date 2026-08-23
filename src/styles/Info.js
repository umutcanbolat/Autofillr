import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 4px 6px;
  border: 2px solid transparent;
  border-radius: 4px;
  background: transparent;
  color: inherit;
  font: inherit;

  &:hover {
    background: ${(props) => props.theme.fieldHover};
  }

  &:focus {
    border-color: ${(props) => props.theme.primaryColor};
    outline: none;
    background: ${(props) => props.theme.field};
  }
`;
