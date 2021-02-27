import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';

import Offer from './Offer/Offer';
import { useDispatch } from 'react-redux';

import { setAsBuy, setAsSell } from '../../../../store/actions/app/app';

import {
  Container,
  Header,
  HeaderTitleLeft,
  HeaderTitle,
  List
} from '../../../../styles/components/UI/Lists/CurrentOffers/CurrentOffersList';

const mapStateToProps = ({ app }) => ({ app });

const CurrentOffersList = ({ app }) => {
  const dispatch = useDispatch();

  function selectAsBuy(): void {
    dispatch(setAsBuy());
  }

  function selectAsSell(): void {
    dispatch(setAsSell());
  }

  return (
    <Container>
      <Header>
        <HeaderTitleLeft
          className={app.type && 'selected'}
          onClick={() => selectAsBuy()}
        >
          Buy cryptocurrencies
        </HeaderTitleLeft>
        <HeaderTitle
          className={!app.type && 'selected'}
          onClick={() => selectAsSell()}
        >
          Sell cryptocurrencies
        </HeaderTitle>
      </Header>
      <List>
        {[6, 6, 7, 3].map((el) => (
          <Offer />
        ))}
      </List>
    </Container>
  );
};

export default connect(mapStateToProps)(CurrentOffersList);
