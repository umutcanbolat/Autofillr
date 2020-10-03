import React from 'react';
import * as Styled from '../styles';

const handleFocus = (event) => event.target.select();

export default function Info({ text }) {
  return <Styled.Input type="text" onFocus={handleFocus} defaultValue={text} />;
}
