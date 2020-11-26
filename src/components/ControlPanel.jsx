import React from 'react';
import { Select } from 'antd';
import { generateNew } from '../utils/dataGenerator';
import * as Styled from '../styles';

const { Option } = Select;

const handleSubmit = (fields) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, fields, (response) => {
      console.log(response);
    });
  });
};

export default function ControlPanel({ fields, onChange }) {
  return (
    <div className="container">
      <Styled.ControlPanel>
        <Styled.CountryLabel>Country</Styled.CountryLabel>
        <Select
          defaultValue="sw"
          style={{ width: 'fit-content' }}
          size="small"
          onChange={() => {
            onChange();
          }}
        >
          <Option value="sw">Sweeden</Option>
          <Option value="de">Germany</Option>
        </Select>
        <Styled.FillButton
          type="primary"
          onClick={() => {
            handleSubmit(fields);
            onChange(generateNew());
          }}
        >
          Fill now!
        </Styled.FillButton>
      </Styled.ControlPanel>
    </div>
  );
}
