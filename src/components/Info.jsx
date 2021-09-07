import React from 'react';
import * as Styled from '../styles';

const handleFocus = (event) => event.target.select();

export default function Info({ text, onChange, onSubmit }) {
  const onChangeHandler = ({ target: { value } }) => {
    onChange(value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <Styled.Input
      type="text"
      onFocus={handleFocus}
      value={text}
      onChange={onChangeHandler}
      onKeyDown={onKeyPress}
    />
  );
}
