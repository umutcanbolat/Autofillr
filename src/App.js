import React from "react";
import { Divider } from "antd";
import faker from "faker";
import { Header, Details } from "./components";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomCard = faker.helpers.createCard();
  console.log(randomName, randomEmail, randomCard);
  console.log(faker.address);

  return (
    <>
      <Header />
      <Divider />
      <Details />
    </>
  );
}

export default App;
