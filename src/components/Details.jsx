import React from 'react';
import Entry from './Entry';
import * as Styled from '../styles';

export default function Details({ fields, onChange, onSubmit }) {
  return (
    <div className="container">
      <Styled.Details>
        {Object.entries(fields).map(([fieldKey, fieldProps]) => (
          <Entry
            key={fieldKey}
            label={fieldProps.title}
            value={fieldProps.value}
            onChange={(value) => {
              onChange({ [fieldKey]: { ...fieldProps, value } });
            }}
            onSubmit={onSubmit}
          />
        ))}
      </Styled.Details>
    </div>
  );
}
