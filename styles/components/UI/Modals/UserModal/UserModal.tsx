import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100px;
  position: absolute;
  top: 67px;
  transform: translateX(-13px);
  background: ${(props) => props.theme.colors.components.userModal.background};
  border-radius: 4px;
  border: 1px solid
    ${(props) => props.theme.colors.components.userModal.borderColor};
`;

export const FlexList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FlexListItem = styled.a`
  padding: 8px 0;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.components.userModal.color};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;

export const FlexListItemButton = styled.button`
  padding: 8px 0;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.components.userModal.color};
  text-decoration: none;
  border: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
`;
