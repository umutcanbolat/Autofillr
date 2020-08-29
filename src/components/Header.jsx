import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function Header() {
  return (
    <header>
      <div className="container">
        <Title level={2}>Autofillr</Title>
      </div>
    </header>
  );
}
