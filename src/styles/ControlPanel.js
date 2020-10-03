import styled from 'styled-components';
import { Button } from 'antd';

export const ControlPanel = styled.div`
  display: flex;
  align-items: center;
`;

export const CountryLabel = styled.span`
  &::after {
    content: ':';
    margin: 0 0.5em 0 0.125em;
  }
`;

export const FillButton = styled(Button)`
  margin-left: auto;
`;
