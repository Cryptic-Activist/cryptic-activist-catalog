import styled from 'styled-components';

export const Navbar = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  height: 60px;
  border-bottom: 1px solid #000;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
`;

export const Container = styled.div`
  height: 60px;
  width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 2030px) {
    width: 95%;
  }
`;

export const BrandDiv = styled.a`
  display: flex;
  flex-direction: column;
  line-height: 18px;
  transform: translateY(-2px);
  cursor: pointer;
  h1 {
    font-size: 13px;
    color: ${(props) => props.theme.colors.components.navbar.brand.color};
  }
  h2 {
    font-size: 23px;
    color: ${(props) => props.theme.colors.components.navbar.brand.color};
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const MenuItem = styled.a`
  font-size: 14px;
  padding: 5px 7px;
  background: ${(props) =>
    props.theme.colors.components.navbar.link.background};
  color: ${(props) => props.theme.colors.components.navbar.link.color};
  border: 1px solid
    ${(props) => props.theme.colors.components.navbar.link.borderColor};
  border-radius: 4px;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.11s ease-in-out;
  user-select: none;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  }
`;

export const LoginButton = styled.button`
  font-size: 16px;
  margin-left: 20px;
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

export const LoadingDiv = styled.div`
  font-size: 16px;
  margin-left: 20px;
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

export const UserButton = styled.button`
  font-size: 16px;
  margin-left: 20px;
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

export const DrawerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  svg {
    font-size: 21px;
    color: ${(props) => props.theme.colors.text};
  }
  &:focus {
    outline: none;
  }
`;
