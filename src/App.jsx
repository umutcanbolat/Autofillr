import React, { useReducer, useCallback } from 'react';
import { Divider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { Header, Details, ControlPanel } from './components';
import { Light } from './themes';
import './App.css';

const formReducer = (state, { action, formData }) => {
  switch (action) {
    case 'clear':
      return {};
    case 'set':
      return formData;
    case 'add':
      return {
        ...state,
        ...formData,
      };
    default:
      return state;
  }
};

function App() {
  const [formData, dispatch] = useReducer(formReducer, {});

  const fill = useCallback(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs
        .sendMessage(tabs[0].id, formData)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    });
  }, [formData]);

  return (
    <ThemeProvider theme={Light}>
      <Header />
      <Divider />
      <Details
        fields={formData}
        onChange={(data) => {
          dispatch({ action: 'add', formData: data });
        }}
        onSubmit={fill}
      />
      <Divider />
      <ControlPanel
        setFields={(data) => {
          dispatch({ action: 'set', formData: data });
        }}
        onSubmit={fill}
      />
    </ThemeProvider>
  );
}

export default App;
