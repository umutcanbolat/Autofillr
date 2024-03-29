import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import * as configs from '../conf';
import * as Styled from '../styles';

const { Option } = Select;

const initialCountry = configs[localStorage.getItem('country')]
  ? localStorage.getItem('country')
  : Object.keys(configs)[0];

export default function ControlPanel({ setFields, onSubmit }) {
  const [country, setCountry] = useState(initialCountry);

  useEffect(() => {
    localStorage.setItem('country', country);
    const newData = configs[country].generate(country);
    setFields(newData);
  }, [country]);

  return (
    <div className="container">
      <Styled.ControlPanel>
        <Styled.CountryLabel>Country</Styled.CountryLabel>
        <Styled.CountrySelector
          size="small"
          value={country}
          onChange={(val) => {
            setCountry(val);
          }}
        >
          {Object.entries(configs).map(([countryCode, { name }]) => {
            return (
              <Option key={countryCode} value={countryCode}>
                {name}
              </Option>
            );
          })}
        </Styled.CountrySelector>
        <Styled.FillButton
          type="primary"
          onClick={() => {
            onSubmit();
            setFields(configs[country].generate(country));
          }}
        >
          Fill & Generate
        </Styled.FillButton>
      </Styled.ControlPanel>
    </div>
  );
}
