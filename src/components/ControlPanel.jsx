import React, { useCallback, useEffect, useId, useState } from 'react';
import configs, { generateFor } from '../conf';
import * as Styled from '../styles';

const storedCountry = localStorage.getItem('country');
const initialCountry = configs[storedCountry] ? storedCountry : Object.keys(configs)[0];

export default function ControlPanel({ setFields, onSubmit }) {
  const [country, setCountry] = useState(initialCountry);
  const selectId = useId();

  const regenerate = useCallback(
    async (countryCode) => {
      setFields(await generateFor(countryCode));
    },
    [setFields],
  );

  useEffect(() => {
    localStorage.setItem('country', country);

    // Guards against a slower config resolving after a faster one when the
    // country is switched twice in a row.
    let current = true;
    generateFor(country).then((fields) => {
      if (current) setFields(fields);
    });

    return () => {
      current = false;
    };
  }, [country, setFields]);

  return (
    <div className="container">
      <Styled.ControlPanel>
        <Styled.CountryLabel htmlFor={selectId}>Country</Styled.CountryLabel>
        <Styled.CountrySelector
          id={selectId}
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        >
          {Object.entries(configs).map(([countryCode, { name }]) => (
            <option key={countryCode} value={countryCode}>
              {name}
            </option>
          ))}
        </Styled.CountrySelector>
        <Styled.FillButton
          type="button"
          onClick={() => {
            onSubmit();
            regenerate(country);
          }}
        >
          Fill &amp; Generate
        </Styled.FillButton>
      </Styled.ControlPanel>
    </div>
  );
}
