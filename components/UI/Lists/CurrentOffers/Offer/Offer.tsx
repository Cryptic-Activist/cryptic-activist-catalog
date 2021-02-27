import React from 'react';

import {
  Container,
  LeftDiv,
  RightDiv,
  TypeDescDiv,
  TypeName,
  Description,
  PeopleChosen,
  Price,
  Speed,
  Button,
  Limits,
  LimitsBunttonDiv
} from '../../../../../styles/components/UI/Lists/CurrentOffers/Offer/Offer';

const Offer = () => {
  return (
    <Container>
      <LeftDiv>
        <TypeDescDiv>
          <TypeName>Bank Transfer</TypeName>
          <Description>All Banks no negotiation</Description>
        </TypeDescDiv>
        <PeopleChosen>
          <span>65</span> people have chosen this offer
        </PeopleChosen>
      </LeftDiv>
      <RightDiv>
        <Price>54,657.45 USD</Price>
        <Speed>
          <p>Speed:</p>
          <span>8 min</span>
        </Speed>
        <LimitsBunttonDiv>
          <Limits>Limits: 20 - 10,000 USD</Limits>
          <Button>Buy</Button>
        </LimitsBunttonDiv>
      </RightDiv>
    </Container>
  );
};

export default Offer;
