import React, { FC } from 'react';

import { IProgressBarCreateOffer } from '../../../../interfaces/components/UI/ProgressBar';

import {
  Container,
  SelectionActive,
  SelectionDeactivate,
  StepDiv,
  StepActive,
  StepDeactivate,
  Sep
} from '../../../../styles/components/UI/ProgressBar/CreateOffer/CreateOffer';

const CreateOfferProgressBar: FC<IProgressBarCreateOffer> = ({
  isPaymentMethod,
  isTradePricing,
  isTradeInstructions
}) => (
  <Container>
    {isPaymentMethod ? (
      <StepDiv>
        <SelectionActive>
          <div />
        </SelectionActive>
        <StepActive>Payment Method</StepActive>
      </StepDiv>
    ) : (
      <StepDiv>
        <SelectionDeactivate>
          <div />
        </SelectionDeactivate>
        <StepDeactivate>Payment Method</StepDeactivate>
      </StepDiv>
    )}
    <Sep />
    {isTradePricing ? (
      <StepDiv>
        <SelectionActive>
          <div />
        </SelectionActive>
        <StepActive>Trade Pricing</StepActive>
      </StepDiv>
    ) : (
      <StepDiv>
        <SelectionDeactivate>
          <div />
        </SelectionDeactivate>
        <StepDeactivate>Trade Pricing</StepDeactivate>
      </StepDiv>
    )}
    <Sep />
    {isTradeInstructions ? (
      <StepDiv>
        <SelectionActive>
          <div />
        </SelectionActive>
        <StepActive>Trade Instructions</StepActive>
      </StepDiv>
    ) : (
      <StepDiv>
        <SelectionDeactivate>
          <div />
        </SelectionDeactivate>
        <StepDeactivate>Trade Instructions</StepDeactivate>
      </StepDiv>
    )}
  </Container>
);

export default CreateOfferProgressBar;
