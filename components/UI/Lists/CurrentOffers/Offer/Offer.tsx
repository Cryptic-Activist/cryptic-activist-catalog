import React, { FC } from 'react';
import { connect } from 'react-redux';

import { IApp } from '../../../../../interfaces/store/reducers/reducers';

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

const mapStateToProps = ({ app }) => ({ app });

const Offer: FC<{ app: IApp }> = ({ app }) => (
  <Container>
    {app.dimensions[0] <= 370 ? (
      <>
        <LeftDiv>
          <TypeDescDiv>
            <TypeName>Bank Transfer</TypeName>
            <Description>All Banks no negotiation</Description>
          </TypeDescDiv>
          <PeopleChosen>
            <span>65</span> people have chosen this offer
          </PeopleChosen>
          <Speed>
            <p>Speed:</p>
            <span>8 min</span>
          </Speed>
          <Limits>Limits: 20 - 10,000 USD</Limits>
          <Price>54,657.45 USD</Price>
          <Button>Buy</Button>
        </LeftDiv>
      </>
    ) : (
      <>
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
          <Limits>Limits: 20 - 10,000 USD</Limits>
          <Button>Buy</Button>
        </RightDiv>
      </>
    )}
  </Container>
);

export default connect(mapStateToProps)(Offer);
