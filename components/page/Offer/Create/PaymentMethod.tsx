import React, { FC } from 'react';
import { FaBitcoin } from 'react-icons/fa';

import { IPaymentMethod } from '../../../../interfaces/components/pages/OfferCreate/OfferCreate';

import ProgressBar from '../../../UI/ProgressBar/CreateOffer/CreateOffer';

import {
  Wrapper,
  Heading,
  Container,
  Aside,
  Main,
  ChooseCryptocurrency,
  ChooseCryptocurrencyHeading,
  ChooseCryptocurrencyBtn
} from '../../../../styles/components/page/Offer/Create/PaymentMethod';

const PaymentMethod: FC<IPaymentMethod> = ({
  handleTradePricing,
  handleTradeInstruction,
  isPaymentMethod,
  isTradePricing,
  isTradeInstructions
}) => {
  return (
    <Wrapper>
      <Container>
        <Main>
          <Heading>Create an Offer</Heading>

          <ProgressBar
            isPaymentMethod={isPaymentMethod}
            isTradePricing={isTradePricing}
            isTradeInstructions={isTradeInstructions}
          />

          <ChooseCryptocurrency>
            <ChooseCryptocurrencyHeading>
              Choose Cryptocurrency
            </ChooseCryptocurrencyHeading>
            <ChooseCryptocurrencyBtn>
              <FaBitcoin />
              <p>Bitcoin</p>
            </ChooseCryptocurrencyBtn>
          </ChooseCryptocurrency>
        </Main>
        <Aside></Aside>
      </Container>
    </Wrapper>
  );
};

export default PaymentMethod;
