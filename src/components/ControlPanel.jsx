import React from 'react';
import { Select } from 'antd';
import * as Styled from '../styles';

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const handleSubmit = () => {
  console.log(`submitted`);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, function (response) {
      console.log(response.farewell);
    });
  });
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
        <Styled.FillButton type="primary" onClick={handleSubmit}>
          Fill now!
        </Styled.FillButton>
      </Styled.ControlPanel>
    </div>
  );
}
