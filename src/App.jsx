import React, { useReducer } from 'react';
import { Divider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { generateNew } from './utils/dataGenerator';
import { Header, Details, ControlPanel } from './components';
import { Light } from './themes';
import './App.css';

const formReducer = (state, formData) => {
  return {
    ...state,
    ...formData,
  };
};

const sampleData = generateNew();

function App() {
  const [formData, setFormData] = useReducer(formReducer, sampleData);
  return (
    <ThemeProvider theme={Light}>
      <Header />
      <Divider />
      <Details fields={formData} onChange={setFormData} />
      <Divider />
      <ControlPanel fields={formData} onChange={setFormData} />
    </ThemeProvider>
  );
}

export default App;
