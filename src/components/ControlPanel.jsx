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

const defaultCountry = 'se';

export default function ControlPanel({ fields, onGenerate }) {
  const [country, setCountry] = useState(localStorage.getItem('country') || defaultCountry);

  useEffect(() => {
    localStorage.setItem('country', country);
    const newData = generate(country);
    onGenerate(newData);
  }, [country]);

  return (
    <div className="container">
      <Styled.ControlPanel>
        <Styled.CountryLabel>Country</Styled.CountryLabel>
        <Select
          style={{ width: 'fit-content' }}
          size="small"
          value={country}
          onChange={(val) => {
            setCountry(val);
          }}
        >
          <Option value="se">Sweden</Option>
          <Option value="de">Germany</Option>
        </Select>
        <Styled.FillButton
          type="primary"
          onClick={() => {
            handleSubmit(fields);
            onGenerate(generate(country));
          }}
        >
          Fill now!
        </Styled.FillButton>
      </Styled.ControlPanel>
    </div>
  );
}
