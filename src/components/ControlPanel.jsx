import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import generate from '../utils/dataGenerator';
import * as Styled from '../styles';

const { Option } = Select;

const handleSubmit = (fields) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, fields, (response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    });
  });
};

const defaultMarket = 'se';

export default function ControlPanel({ fields, onGenerate }) {
  const [market, setMarket] = useState(defaultMarket);

  useEffect(() => {
    const newData = generate(market);
    onGenerate(newData);
  }, [market]);

  return (
    <div className="container">
      <Styled.ControlPanel>
        <Styled.CountryLabel>Country</Styled.CountryLabel>
        <Select
          style={{ width: 'fit-content' }}
          size="small"
          value={market}
          onChange={(val) => {
            setMarket(val);
          }}
        >
          <Option value="se">Sweeden</Option>
          <Option value="de">Germany</Option>
        </Select>
        <Styled.FillButton
          type="primary"
          onClick={() => {
            handleSubmit(fields);
            onGenerate(generate(market));
          }}
        >
          Fill now!
        </Styled.FillButton>
      </Styled.ControlPanel>
    </div>
  );
}
