import styled from 'styled-components';
import { Button, Select } from 'antd';

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
  background: ${(props) => props.theme.primaryColor};
  border-color: ${(props) => props.theme.primaryColor};
  &:hover {
    background: ${(props) => props.theme.primaryLighter};
    border-color: ${(props) => props.theme.primaryLighter};
  }
  &:focus {
    background: ${(props) => props.theme.primaryLighter};
    border-color: ${(props) => props.theme.primaryLighter};
  }
  &:active {
    background: ${(props) => props.theme.primaryDarker};
    border-color: ${(props) => props.theme.primaryDarker};
  }
`;

export const CountrySelector = styled(Select)`
  width: fit-content;
  min-width: 6rem;
`;
