import React from 'react';
import * as Styled from '../styles';

const handleFocus = (event) => event.target.select();

export default function Info({ text, onChange }) {
  const onChangeHandler = ({ target: { value } }) => {
    onChange(value);
  };
  return <Styled.Input type="text" onFocus={handleFocus} value={text} onChange={onChangeHandler} />;
}
