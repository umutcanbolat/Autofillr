import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Details, ControlPanel } from './components';
import { Dark } from './themes';
import GlobalStyle from './styles/GlobalStyles';
import * as Styled from './styles';
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

  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyle />
      <Header />
      <Styled.Divider />
      <Details
        fields={formData}
        onChange={(data) => {
          dispatch({ action: 'add', formData: data });
        }}
      />
      <Styled.Divider />
      <ControlPanel
        fields={formData}
        setFields={(data) => {
          dispatch({ action: 'set', formData: data });
        }}
      />
    </ThemeProvider>
  );
}

export default App;
