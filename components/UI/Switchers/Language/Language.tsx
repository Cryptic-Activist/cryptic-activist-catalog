import React, { FC } from 'react';
import { FaGlobeAmericas, FaChevronDown } from 'react-icons/fa';

import {
  LanguageBtn,
  IconTextDiv,
  LanguageDiv,
  BtnText
} from '../../../../styles/components/UI/Switchers/Language/Language';

const Language: FC = () => {
  return (
    <LanguageBtn>
      <IconTextDiv>
        <FaGlobeAmericas />
        <BtnText>English</BtnText>
      </IconTextDiv>
      <FaChevronDown />
    </LanguageBtn>
  );
};

export default Language;
