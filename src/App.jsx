import React, { useReducer } from 'react';
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

  return (
    <ThemeProvider theme={Light}>
      <Header />
      <Divider />
      <Details
        fields={formData}
        onChange={(data) => {
          dispatch({ action: 'add', formData: data });
        }}
      />
      <Divider />
      <ControlPanel
        fields={formData}
        onGenerate={(data) => {
          dispatch({ action: 'set', formData: data });
        }}
      />
    </ThemeProvider>
  );
}

export default App;
