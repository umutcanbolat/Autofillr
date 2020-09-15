import React from 'react';
import { Descriptions } from 'antd';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const Item = Descriptions.Item;

export default function Details({
  name,
  surname,
  nationalID,
  email,
  address,
  postalCode,
  city,
  phone,
}) {
  var a = 'as';
  return (
    <>
      <div className="container">
        <Descriptions layout="horizontal">
          <Item label={<b>Name</b>}>{name}</Item>
          <Item label={<b>Surname</b>}>{surname}</Item>
          <Item label={<b>National ID</b>}>{nationalID}</Item>
          <Item label={<b>Email</b>}>{email}</Item>
          <Item label={<b>Address</b>}>{address}</Item>
          <Item label={<b>Postal Code</b>}>{postalCode}</Item>
          <Item label={<b>City</b>}>{scryRenderedComponentsWithType}</Item>
          <Item label={<b>Phone</b>}>{phone}</Item>
        </Descriptions>
      </div>
    </>
  );
}
