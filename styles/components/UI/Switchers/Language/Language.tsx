import styled from 'styled-components';

export const LanguageBtn = styled.button`
  background: ${(props) => props.theme.colors.switchers.background};
  border: 1px solid ${(props) => props.theme.colors.switchers.border};
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    color: ${(props) => props.theme.colors.switchers.icon};
  }
`;

export const IconTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 10px;
`;

export const BtnText = styled.p`
  font-size: 14px;
  padding-left: 5px;
`;

export const LanguageDiv = styled.div`
  background: ${(props) => props.theme.colors.switchers.icon};
  border-radius: 50px;
  height: 20px;
  width: 40px;
`;

export const SwitcherCircle = styled.div`
  background: #ffcd2b;
  border-radius: 50px;
  height: 14px;
  width: 14px;
  transform: translate(3px, 3px);
`;
