import React from 'react';
import { connect } from 'react-redux';

import P2P from '../../../assets/img/p2p.svg';

import { IApp } from '../../../interfaces/store/reducers/reducers';

import {
  HeroDivDesktop,
  P2PImg,
  HeroDivGrid,
  HeroH2,
  HeroP
} from '../../../styles/components/page/Home/Hero';

const mapStateTopState = ({ app }) => {
  return { app };
};

const Hero = ({ app }) => {
  return (
    <>
      <HeroDivDesktop>
        <HeroDivGrid>
          <div>
            <HeroH2>Exchange privately</HeroH2>
            <HeroP>
              Exchange cryptocurrencies, goods, and services without the big
              brother watching you at every step.
            </HeroP>
          </div>
          <div>
            <P2PImg src={P2P} />
          </div>
          <div>
            <HeroH2>Keep anonymous</HeroH2>
            <HeroP>
              Communicate, trade, and exchange without revealing your true
              identity.
            </HeroP>
          </div>
        </HeroDivGrid>
      </HeroDivDesktop>
    </>
  );
};

export default connect(mapStateTopState)(Hero);
