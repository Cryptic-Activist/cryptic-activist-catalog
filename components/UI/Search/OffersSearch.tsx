import React, { ChangeEvent, FC, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FaInfo } from 'react-icons/fa';

import { IFindOffers } from '../../../interfaces/components/UI/Search/Search';
import Filters from './Filters/Filters';

import { setAsBuy, setAsSell } from '../../../store/actions/app/app';

import {
  Container,
  TopBtnsDiv,
  TopBtn,
  Form,
  FieldContainer,
  FieldLabel,
  FieldSelectCrypto,
  FieldSelectPaymentMethod,
  InfoDiv,
  InfoIcon,
  InfoCryptocurrencyCurrentPrice,
  SubmitButton
} from '../../../styles/components/UI/Search/OffersSearch';

const mapStateToProps = ({ app }) => ({ app });

const OffersSearch: FC<IFindOffers> = (props) => {
  const { borderColor, app, filters } = props;

  const dispatch = useDispatch();

  function selectBuyTransaction(e: ChangeEvent<any>): void {
    dispatch(setAsBuy());
  }

  function selectSellTransaction(e: ChangeEvent<any>): void {
    dispatch(setAsSell());
  }

  return (
    <Container borderColor={borderColor}>
      <TopBtnsDiv>
        <TopBtn
          className={app.type && 'selected'}
          onClick={(e) => selectBuyTransaction(e)}
        >
          Buy
        </TopBtn>
        <TopBtn
          className={!app.type && 'selected'}
          onClick={(e) => selectSellTransaction(e)}
        >
          Sell
        </TopBtn>
      </TopBtnsDiv>
      <Form>
        <FieldContainer>
          <FieldLabel>Cryptocurrecy</FieldLabel>
          <FieldSelectCrypto type="button">BTC - Bitcoin</FieldSelectCrypto>
          <InfoDiv>
            <InfoIcon type="button">
              <FaInfo />
            </InfoIcon>
            <InfoCryptocurrencyCurrentPrice>
              1 BTC = 35,532.66 USD
            </InfoCryptocurrencyCurrentPrice>
          </InfoDiv>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>{app.type ? 'Payment Method' : 'Get Paid In'}</FieldLabel>
          <FieldSelectPaymentMethod type="button">
            <p>All Payment Methods</p>
            <button>Show All</button>
          </FieldSelectPaymentMethod>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>{app.type ? 'You Pay' : 'You Get'}</FieldLabel>
          <FieldSelectPaymentMethod type="button">
            <p>Any Amount</p>
            <button>Any currency</button>
          </FieldSelectPaymentMethod>
        </FieldContainer>
        {filters && <Filters />}
        <FieldContainer>
          <SubmitButton>Find Offer</SubmitButton>
        </FieldContainer>
      </Form>
    </Container>
  );
};

export default connect(mapStateToProps)(OffersSearch);
