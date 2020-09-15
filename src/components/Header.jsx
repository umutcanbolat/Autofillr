import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Title>Autofillr.</Title>
      </div>
    </header>
  );
}

const Title = styled.h1`
  font-family: "Paytone One", Arial, Helvetica, sans-serif;
  font-weight: unset !important;
  color: #e95420;
`;
