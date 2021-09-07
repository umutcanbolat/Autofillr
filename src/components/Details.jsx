import React from 'react';
import { Row, Col } from 'antd';
import Entry from './Entry';
import * as Styled from '../styles';

export default function Details({ fields, onChange, onSubmit }) {
  const entries = Object.entries(fields).map(([fieldKey, fieldProps]) => (
    <Col key={fieldKey} span={12}>
      <Entry
        label={fieldProps.title}
        value={fieldProps.value}
        onChange={(value) => {
          onChange({ [fieldKey]: { ...fieldProps, value } });
        }}
        onSubmit={onSubmit}
      />
    </Col>
  ));

  return (
    <>
      <div className="container">
        <Styled.Details>
          <Row gutter={[16, 5]}>{entries}</Row>
        </Styled.Details>
      </div>
    </>
  );
}
