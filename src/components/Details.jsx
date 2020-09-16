import React from 'react';
import { Descriptions } from 'antd';
import { StyledDescriptions } from '../styles';
import Info from './Info';

const { Item } = Descriptions;

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
  return (
    <>
      <div className="container">
        <StyledDescriptions layout="horizontal">
          <Item label="Name">
            <Info text={name} />
          </Item>
          <Item label="Surname">
            <Info text={surname} />
          </Item>
          <Item label="National ID">
            <Info text={nationalID} />
          </Item>
          <Item label="Email">
            <Info text={email} />
          </Item>
          <Item label="Address">
            <Info text={address} />
          </Item>
          <Item label="Postal Code">
            <Info text={postalCode} />
          </Item>
          <Item label="City">
            <Info text={city} />
          </Item>
          <Item label="Phone">
            <Info text={phone} />
          </Item>
        </StyledDescriptions>
      </div>
    </>
  );
}
