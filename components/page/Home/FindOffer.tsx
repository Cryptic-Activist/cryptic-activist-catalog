import React, { FC } from 'react';

import OffersSearch from '../../UI/Search/OffersSearch';
import OffersList from '../../UI/Lists/Offers/OffersList';

import {
  Wrapper,
  Container,
  FlexDiv
} from '../../../styles/components/page/Home/FindOffer';

const FindOffer: FC = () => (
  <Wrapper>
    <Container>
      <FlexDiv>
        <OffersSearch borderColor="#000" filters={false} />
      </FlexDiv>
      <FlexDiv style={{ width: '100%' }}>
        <OffersList endpoint="" limit={4} height="430px" />
      </FlexDiv>
    </Container>
  </Wrapper>
);

export default FindOffer;
