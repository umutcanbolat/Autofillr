import React from 'react';
import { Divider } from 'antd';
import faker from 'faker';
import { Header, Details, ControlPanel } from './components';
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
    <>
      <Header />
      <Divider />
      <Details fields={sampleData} />
      <Divider />
      <ControlPanel />
    </>
  );
}

export default App;
