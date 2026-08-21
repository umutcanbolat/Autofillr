import React, { useId } from 'react';
import Info from './Info';
import * as Styled from '../styles';

export default function Entry({ label, value, onChange, onSubmit }) {
  const inputId = useId();

  return (
    <Styled.Entry>
      <Styled.Label htmlFor={inputId}>{label}</Styled.Label>
      <Info id={inputId} text={value} onChange={onChange} onSubmit={onSubmit} />
    </Styled.Entry>
  );
}
