import styled from 'styled-components';

export const ControlPanel = styled.div`
  display: flex;
  align-items: center;
`;

export const CountryLabel = styled.label`
  &::after {
    content: ':';
    margin: 0 0.5em 0 0.125em;
  }
`;

export const CountrySelector = styled.select`
  min-width: 7rem;
  height: 24px;
  padding: 0 0.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  background: #fff;
  color: inherit;
  font: inherit;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.primaryLighter};
  }

  &:focus {
    outline: none;
  }
`;

export const FillButton = styled.button`
  margin-left: auto;
  padding: 0.3rem 1rem;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 2px;
  background: ${(props) => props.theme.primaryColor};
  color: #fff;
  font: inherit;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.1s,
    border-color 0.1s;

  &:hover,
  &:focus-visible {
    background: ${(props) => props.theme.primaryLighter};
    border-color: ${(props) => props.theme.primaryLighter};
  }

  &:active {
    background: ${(props) => props.theme.primaryDarker};
    border-color: ${(props) => props.theme.primaryDarker};
  }
`;
