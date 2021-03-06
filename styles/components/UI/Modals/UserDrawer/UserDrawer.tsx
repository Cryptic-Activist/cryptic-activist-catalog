import styled, { css } from 'styled-components';

import {
  SlideDrawerClose,
  SlideDrawerOpen,
  ShowBackground,
  HideBackground
} from '../../../../animations/Animations';

interface userModelProps {
  openUserModal: boolean;
}

const openDrawer = css`
  animation: ${SlideDrawerOpen} 0.2s ease-in-out forwards;
`;

const closeDrawer = css`
  animation: ${SlideDrawerClose} 0.2s ease-in-out forwards;
`;

const showBackground = css`
  animation: ${ShowBackground} 0.2s ease-in-out forwards;
`;

const hideBackground = css`
  animation: ${HideBackground} 0.2s ease-in-out forwards;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.15);
  /* ${(props: userModelProps) =>
    props.openUserModal ? hideBackground : showBackground}; */
`;

export const DrawerDiv = styled.div`
  width: 200px;
  left: 0;
  top: 0px;
  height: 100%;
  position: fixed;
  border-right: 1px solid #000;
  background: #ffcd2b;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  /* transform: translateX(-210px); */
  /* ${(props: userModelProps) =>
    props.openUserModal ? openDrawer : closeDrawer}; */
  overflow: hidden;
  z-index: 99999999;
  @media (max-height: 225px) {
    overflow-y: scroll;
  }
`;

export const List = styled.div`
  width: 100%;
`;

export const ListItem = styled.a`
  width: 100%;
  font-size: 16px;
  color: #000;
  -webkit-text-decoration: none;
  text-decoration: none;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #e2b523;
  }
  &:active {
    background: #c7a021;
  }
`;

export const LogoutButton = styled.button`
  font-size: 16px;
  margin-left: 15px;
  margin-top: 5px;
  padding: 7px 9px;
  color: ${(props) => props.theme.colors.components.navbar.user.color};
  background: ${(props) =>
    props.theme.colors.components.navbar.user.background};
  border: 1px solid
    ${(props) => props.theme.colors.components.navbar.user.borderColor};
  border-radius: 4px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  &:focus {
    outline: none;
  }
`;
