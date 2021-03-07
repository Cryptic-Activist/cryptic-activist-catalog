export interface IPaymentMethod {
  handleTradePricing: () => void;
  handleTradeInstruction: () => void;
  isPaymentMethod: boolean;
  isTradePricing: boolean;
  isTradeInstructions: boolean;
}

export interface ITradePricing {
  handlePaymentMethod: () => void;
  handleTradeInstruction: () => void;
  isPaymentMethod: boolean;
  isTradePricing: boolean;
  isTradeInstructions: boolean;
}

export interface ITradeInstructions {
  handleTradePricing: () => void;
  isPaymentMethod: boolean;
  isTradePricing: boolean;
  isTradeInstructions: boolean;
}
