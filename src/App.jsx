import React, { useReducer, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Details, ControlPanel } from './components';
import { Light } from './themes';
import * as Styled from './styles';

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

  const setFields = useCallback((data) => {
    dispatch({ action: 'set', formData: data });
  }, []);

  const addFields = useCallback((data) => {
    dispatch({ action: 'add', formData: data });
  }, []);

  const fill = useCallback(async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) return;

    try {
      // The content script is not injected into restricted pages (the web store,
      // chrome:// URLs, ...), in which case there is simply no receiver.
      await chrome.tabs.sendMessage(tab.id, formData);
    } catch (error) {
      console.error(error);
    }
  }, [formData]);

  return (
    <ThemeProvider theme={Light}>
      <Header />
      <Styled.Divider />
      <Details fields={formData} onChange={addFields} onSubmit={fill} />
      <Styled.Divider />
      <ControlPanel setFields={setFields} onSubmit={fill} />
    </ThemeProvider>
  );
}

export default App;
