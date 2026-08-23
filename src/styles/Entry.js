import styled from 'styled-components';

export const Entry = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
`;

export const Label = styled.label`
  overflow: hidden;
  padding: 0 6px;
  color: ${(props) => props.theme.textMuted};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;
