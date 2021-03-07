import React, { FC } from 'react';

import { ITradePricing } from '../../../../interfaces/components/pages/OfferCreate/OfferCreate';

const TradePricing: FC<ITradePricing> = ({
  handlePaymentMethod,
  handleTradeInstruction,
  isPaymentMethod,
  isTradePricing,
  isTradeInstructions
}) => {
  return <h1>Trade Pricing</h1>;
};

export default TradePricing;
