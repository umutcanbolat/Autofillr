import React, { useReducer } from 'react';
import { Divider } from 'antd';
import { ThemeProvider } from 'styled-components';
// import faker from 'faker';
import { Header, Details, ControlPanel } from './components';
import { Light } from './themes';
import './App.css';

const formReducer = (state, formData) => {
  return {
    ...state,
    ...formData,
  };
};

const sampleData = {
  name: 'John',
  surname: 'Doe',
  nationalId: '940423-4263',
  email: 'john.doe@example.com',
  address: 'Bottna Berghem 71',
  postalCode: '57020',
  city: 'Stockholm',
  phone: '0380-7709280',
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, sampleData);
  return (
    <ThemeProvider theme={Light}>
      <Header />
      <Divider />
      <Details fields={formData} onChange={setFormData} />
      <Divider />
      <ControlPanel />
    </ThemeProvider>
  );
}

export default App;
