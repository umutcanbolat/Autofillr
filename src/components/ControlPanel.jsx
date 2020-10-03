import React from 'react';
import { Select } from 'antd';
import * as Styled from '../styles';

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export default function ControlPanel() {
  return (
    <div className="container">
      <Styled.ControlPanel>
        <Styled.CountryLabel>Country</Styled.CountryLabel>
        <Select
          defaultValue="sw"
          style={{ width: 'fit-content' }}
          size="small"
          onChange={handleChange}
        >
          <Option value="sw">Sweeden</Option>
          <Option value="de">Germany</Option>
        </Select>
        <Styled.FillButton type="primary">Fill now!</Styled.FillButton>
      </Styled.ControlPanel>
    </div>
  );
}
