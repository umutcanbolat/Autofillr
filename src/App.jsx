import React from 'react';
import { Divider } from 'antd';
import { ThemeProvider } from 'styled-components';
import faker from 'faker';
import { Header, Details, ControlPanel } from './components';
import { Light } from './themes';
import './App.css';

function App() {
  const randomName = faker.name.findName();
  const randomEmail = faker.internet.email();
  const randomCard = faker.helpers.createCard();
  console.log(randomName, randomEmail, randomCard);
  console.log(faker.address);

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

  return (
    <ThemeProvider theme={Light}>
      <Header />
      <Divider />
      <Details fields={sampleData} />
      <Divider />
      <ControlPanel />
    </ThemeProvider>
  );
}

export default App;
