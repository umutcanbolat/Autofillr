import React from 'react';
import { Row, Col } from 'antd';
import Entry from './Entry';
import * as Styled from '../styles';

export default function Details({ fields }) {
  const entries = Object.entries(fields).map(([key, value]) => (
    <Col key={key} className="gutter-row" span={12}>
      <Entry label={key} value={value} />
    </Col>
  ));

  return (
    <>
      <div className="container">
        <Styled.Details>
          <Row gutter={[16, 24]}>{entries}</Row>
        </Styled.Details>
      </div>
    </>
  );
}
