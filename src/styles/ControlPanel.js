import styled from 'styled-components';

export const ControlPanel = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  background: ${(props) => props.theme.surface};
`;

export const CountryLabel = styled.label`
  color: ${(props) => props.theme.textMuted};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const CountrySelector = styled.select`
  height: 30px;
  padding: 0 6px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background: ${(props) => props.theme.field};
  color: inherit;
  font: inherit;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.textMuted};
  }

  &:focus-visible {
    border-color: ${(props) => props.theme.primaryColor};
    outline: none;
    border-width: 2px;
  }
`;

export const FillButton = styled.button`
  height: 30px;
  margin-left: auto;
  padding: 0 12px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  background: ${(props) => props.theme.primaryColor};
  color: #fff;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 0.1s,
    border-color 0.1s;

  &:hover,
  &:focus-visible {
    outline: none;
    background: ${(props) => props.theme.primaryHover};
    border-color: ${(props) => props.theme.primaryHover};
  }

  &:active {
    background: ${(props) => props.theme.primaryActive};
    border-color: ${(props) => props.theme.primaryActive};
  }
`;
