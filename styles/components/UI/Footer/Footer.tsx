import styled from 'styled-components';

export const FooterDiv = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-top: 1px solid #000;
  padding: 50px 0 10px 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  transition: all 0.11s ease-in-out;
`;

export const Container = styled.div`
  width: 1920px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 60px 20px;
  @media (max-width: 2030px) {
    width: 95%;
  }
`;

export const BrandQuickSettingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
    gap: 25px;
    justify-content: space-evenly;
  }
`;

export const BrandDiv = styled.div`
  @media (max-width: 450px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const BrandA = styled.a`
  display: flex;
  flex-direction: column;
  line-height: 19px;
  transform: translateY(-2px);
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.11s ease-in-out;
  h1 {
    font-size: 15px;
  }
  h2 {
    font-size: 25px;
  }
`;

export const ThemeSwitcherLanguageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  @media (max-width: 450px) {
    justify-content: space-evenly;
    height: 38px;
  }
`;

export const SubMenus = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 580px) {
    align-items: center;
  }
`;

export const SubMenuHeading = styled.h4`
  font-size: 16px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.text};
  width: fit-content;
  @media (max-width: 580px) {
    text-align: center;
  }
`;

export const SubMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: fit-content;
`;

export const SubMenuItem = styled.li`
  list-style: none;
  width: fit-content;
  @media (max-width: 580px) {
    margin: 0 auto;
  }
  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    font-size: 14px;
  }
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  text-align: center;
  @media (max-width: 580px) {
    font-size: 13px;
  }
`;
