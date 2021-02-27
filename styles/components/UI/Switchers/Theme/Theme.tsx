import styled from 'styled-components';

export const SwitcherBtn = styled.button`
  background: ${(props) => props.theme.colors.switchers.background};
  border: 1px solid ${(props) => props.theme.colors.switchers.border};
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  transition: all 0.11s ease-in-out;
  &:focus {
    outline: none;
  }
`;

export const IconTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 110px;
  svg {
    color: ${(props) => props.theme.colors.switchers.icon};
    transition: all 0.11s ease-in-out;
  }
`;

export const BtnText = styled.p`
  font-size: 14px;
`;

export const ThemeMenu = styled.div`
  background: ${(props) => props.theme.colors.switchers.background};
  border: 4px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  transform: translateY(-78px);
  border-radius: 3px;
  background: ${(props) => props.theme.colors.switchers.background};
  border: 1px solid ${(props) => props.theme.colors.switchers.border};
  transition: all 0.11s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
`;

export const ThemeBtn = styled.button`
  padding: 5px;
  font-size: 16px;
  background: ${(props) => props.theme.colors.switchers.background};
  color: ${(props) => props.theme.colors.switchers.text};
  border: none;
  padding: 5px 8px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  transition: all 0.11s ease-in-out;
  &:focus {
    outline: none;
  }

  div {
    height: 20px;
    width: 20px;
    display: block;
    border-radius: 50px;
    border: 1px solid #000;
  }
`;
