import React from 'react';
import { StyledInfo } from '../styles';

const handleFocus = (event) => event.target.select();

export default function Info({ text }) {
  return (
    <StyledInfo>
      <input type="text" onFocus={handleFocus} defaultValue={text} />
    </StyledInfo>
  );
}
