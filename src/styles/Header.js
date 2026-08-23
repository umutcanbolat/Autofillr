import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 12px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  color: ${(props) => props.theme.primaryColor};
  font-family: 'Paytone One', Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
`;

export const Logo = styled.img`
  width: 18px;
  height: 18px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 2px;
  margin-left: auto;
`;

const iconControl = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: none;
  color: ${(props) => props.theme.textMuted};
  cursor: pointer;

  &:hover,
  &:focus-visible {
    outline: none;
    background: ${(props) => props.theme.fieldHover};
    color: ${(props) => props.theme.primaryColor};
  }

  svg {
    display: block;
    fill: currentcolor;
  }
`;

export const RepoLink = styled.a`
  ${iconControl}
`;

export const ThemeToggle = styled.button`
  ${iconControl}
  font: inherit;
`;
