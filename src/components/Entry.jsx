import React from 'react';
import Info from './Info';
import * as Styled from '../styles';

export default function Entry({ label, value, onChange }) {
  return (
    <Styled.Entry>
      <Styled.Label>{label}</Styled.Label>
      <Info text={value} onChange={onChange} />
    </Styled.Entry>
  );
}
