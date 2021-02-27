import React, { FC, useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import themes from '../../../../styles/themes/themes';

import { toCapitalize } from '../../../../utils/string/string';

import {
  BtnText,
  SwitcherBtn,
  IconTextDiv,
  ThemeMenu,
  ThemeBtn
} from '../../../../styles/components/UI/Switchers/Theme/Theme';

const Theme: FC<any> = ({ setThemeColor }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storageValue = JSON.parse(localStorage.getItem('theme'));

      if (storageValue) {
        selectThemeName(toCapitalize(storageValue.title));
        setThemeColor(storageValue);
        selectTheme(storageValue.title);
      } else {
        selectThemeName(toCapitalize(themes.light.title))
        setThemeColor(themes.light);
        selectTheme(themes.light.title)
      }
    }
  }, [typeof localStorage === 'undefined']);

  function selectTheme(themeTitle: string): void {
    selectThemeName(toCapitalize(themeTitle));
    setThemeColor(themeTitle);
  }

  function handleToggleMenu(): void {
    setOpenMenu(!openMenu);
  }

  function selectThemeName(themeName: string): void {
    setSelectedTheme(themeName);
  }

  return (
    <>
      {openMenu && (
        <ThemeMenu>
          {Object.values(themes).map((theme) => (
            <ThemeBtn onClick={() => selectTheme(theme.title)}>
              <div
                style={{
                  background: theme.colors.primary
                }}
              ></div>
              {toCapitalize(theme.title)}
            </ThemeBtn>
          ))}
        </ThemeMenu>
      )}
      <SwitcherBtn onClick={() => handleToggleMenu()}>
        <IconTextDiv>
          <FaMoon />
          <BtnText>{selectedTheme} theme</BtnText>
        </IconTextDiv>
      </SwitcherBtn>
    </>
  );
};

export default Theme;
