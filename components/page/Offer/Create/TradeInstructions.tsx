import React, { FC } from 'react';

import { ITradeInstructions } from '../../../../interfaces/components/pages/OfferCreate/OfferCreate';

const TradeInstructions: FC<ITradeInstructions> = ({
  handleTradePricing,
  isPaymentMethod,
  isTradePricing,
  isTradeInstructions
}) => {
  return <h1>Trade Instructions</h1>;
};

export default TradeInstructions;
