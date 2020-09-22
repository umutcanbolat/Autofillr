import React from 'react';
import Info from './Info';
import { StyledEntry } from '../styles';

export default function Entry({ label, value }) {
  return (
    <StyledEntry>
      <span className="label">{label}</span>
      <Info text={value} />
    </StyledEntry>
  );
}
