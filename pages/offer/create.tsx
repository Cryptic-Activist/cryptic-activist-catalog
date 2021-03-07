import React, { FC, useState } from 'react';

import PaymentMethod from '../../components/page/Offer/Create/PaymentMethod';
import TradeInstructions from '../../components/page/Offer/Create/TradeInstructions';
import TradePricing from '../../components/page/Offer/Create/TradePricing';

const OfferCreate: FC = () => {
  const [isPaymentMethod, setIsPaymentMethod] = useState<boolean>(true);
  const [isTradePricing, setIsTradePricing] = useState<boolean>(false);
  const [isTradeInstructions, setIsTradeInstructions] = useState<boolean>(
    false
  );

  function handlePaymentMethod(): void {
    setIsPaymentMethod(true);
    setIsTradePricing(false);
    setIsTradeInstructions(false);
  }

  function handleTradePricing(): void {
    setIsTradePricing(true);
    setIsPaymentMethod(false);
    setIsTradeInstructions(false);
  }

  function handleTradeInstruction(): void {
    setIsTradeInstructions(true);
    setIsTradePricing(false);
    setIsPaymentMethod(false);
  }

  return (
    <>
      {isPaymentMethod && (
        <PaymentMethod
          handleTradePricing={handleTradePricing}
          handleTradeInstruction={handleTradeInstruction}
          isPaymentMethod={isPaymentMethod}
          isTradePricing={isTradePricing}
          isTradeInstructions={isTradeInstructions}
        />
      )}
      {isTradePricing && (
        <TradePricing
          handlePaymentMethod={handlePaymentMethod}
          handleTradeInstruction={handleTradeInstruction}
          isPaymentMethod={isPaymentMethod}
          isTradePricing={isTradePricing}
          isTradeInstructions={isTradeInstructions}
        />
      )}
      {isTradeInstructions && (
        <TradeInstructions
          handleTradePricing={handleTradePricing}
          isPaymentMethod={isPaymentMethod}
          isTradePricing={isTradePricing}
          isTradeInstructions={isTradeInstructions}
        />
      )}
    </>
  );
};

export default OfferCreate;
