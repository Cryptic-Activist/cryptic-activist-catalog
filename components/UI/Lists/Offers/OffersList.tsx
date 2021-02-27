import React, { FC, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FaSortAmountDownAlt } from 'react-icons/fa';

import { IOffersList } from '../../../../interfaces/components/UI/Lists/Offers/OffersList';

import Offer from './Offer/Offer';

import {
  Container,
  Header,
  HeaderMobile,
  HeaderTitleLeft,
  HeaderTitleRight,
  SortButton,
  List
} from '../../../../styles/components/UI/Lists/Offers/OffersList';

const mapStateToProps = ({ app }) => ({ app });

const OffersList: FC<IOffersList> = ({ endpoint, limit, app, height }) => (
  <Container height={height}>
    {app.isMobile ? (
      <HeaderMobile>
        <HeaderTitleLeft>{app.type ? 'Buy from' : 'Sell from'}</HeaderTitleLeft>
        <HeaderTitleRight>
          Rate per Bitcoin
          <SortButton>
            <FaSortAmountDownAlt />
          </SortButton>
        </HeaderTitleRight>
      </HeaderMobile>
    ) : (
      <Header>
        <HeaderTitleLeft>{app.type ? 'Buy from' : 'Sell from'}</HeaderTitleLeft>
        <HeaderTitleLeft>{app.type ? 'Pay with' : 'Sell for'}</HeaderTitleLeft>
        <HeaderTitleRight>Avg. trade speed</HeaderTitleRight>
        <HeaderTitleRight>
          Rate per Bitcoin
          <SortButton>
            <FaSortAmountDownAlt />
          </SortButton>
        </HeaderTitleRight>
      </Header>
    )}
    <List>
      {[2, 4, 5, 7, 6, 6, 7, 3].map((el) => (
        <Offer />
      ))}
    </List>
  </Container>
);

export default connect(mapStateToProps)(OffersList);
