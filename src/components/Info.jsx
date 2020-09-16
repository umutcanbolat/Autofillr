import React from 'react';
import styled from 'styled-components';

const handleFocus = (event) => event.target.select();

export default function Info({ text }) {
  return (
    <>
      <StyledInput type="text" onFocus={handleFocus} value={text} />
    </>
  );
}

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;

  &:focus {
    border: none;
  }
`;
