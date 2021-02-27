import React, { FC } from 'react';
import Link from 'next/link';

import ThemeSwitcher from '../Switchers/Theme/Theme';
import LanguageSwitcher from '../Switchers/Language/Language';

import { IFooter } from '../../../interfaces/components/UI/Footer/Footer';

import {
  FooterDiv,
  Container,
  BrandQuickSettingsDiv,
  BrandDiv,
  BrandA,
  ThemeSwitcherLanguageDiv,
  SubMenu,
  SubMenuHeading,
  SubMenus,
  SubMenuItem,
  SubMenuList,
  Copyright
} from '../../../styles/components/UI/Footer/Footer';

const Footer: FC<IFooter> = ({ setThemeColor }) => {
  return (
    <FooterDiv>
      <Container>
        <BrandQuickSettingsDiv>
          <BrandDiv>
            <Link href="/" as="/">
              <BrandA>
                <h1>Cryptic Activist</h1>
                <h2>Catalog</h2>
              </BrandA>
            </Link>
          </BrandDiv>
          <ThemeSwitcherLanguageDiv>
            <ThemeSwitcher setThemeColor={setThemeColor} />
            <LanguageSwitcher />
          </ThemeSwitcherLanguageDiv>
        </BrandQuickSettingsDiv>
        <SubMenus>
          <SubMenu>
            <SubMenuHeading>Trading</SubMenuHeading>
            <SubMenuList>
              <SubMenuItem>
                <Link href="/buy" as="/buy">
                  <a>Buy Cryptocurrencies</a>
                </Link>
              </SubMenuItem>
              <SubMenuItem>
                <Link href="/sell" as="/sell">
                  <a>Sell Cryptocurrencies</a>
                </Link>
              </SubMenuItem>
              <SubMenuItem>
                <Link href="/become-a-vendor" as="/become-a-vendor">
                  <a>Become a vendor</a>
                </Link>
              </SubMenuItem>
            </SubMenuList>
          </SubMenu>
          <SubMenu>
            <SubMenuHeading>Legalities</SubMenuHeading>
            <SubMenuList>
              <SubMenuItem>
                <Link href="/terms-and-conditions" as="/terms-and-conditions">
                  <a>Terms & Conditions</a>
                </Link>
              </SubMenuItem>
              <SubMenuItem>
                <Link href="/privacy-policy" as="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </SubMenuItem>
              <SubMenuItem>
                <Link href="/cookies-policy" as="/cookies-policy">
                  <a>Cookies Policy</a>
                </Link>
              </SubMenuItem>
            </SubMenuList>
          </SubMenu>
          <SubMenu>
            <SubMenuHeading>About Cryptic Activist Catalog</SubMenuHeading>
            <SubMenuList>
              <SubMenuItem>
                <Link href="/about-us" as="/about-us">
                  <a>About Us</a>
                </Link>
              </SubMenuItem>
            </SubMenuList>
          </SubMenu>
        </SubMenus>
        <Copyright>
          &copy; {new Date().getFullYear()} Cryptic Activist Catalog - All
          rights reserved
        </Copyright>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
