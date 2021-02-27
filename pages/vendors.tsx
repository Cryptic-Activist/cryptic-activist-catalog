import React, { FC } from 'react';
import { connect } from 'react-redux';

import OffersSearch from '../components/UI/Search/OffersSearch';
import OffersList from '../components/UI/Lists/Offers/OffersList';

import { IVendorsProps } from '../interfaces/pages/Vendors/Vendors';

import {
  Wrapper,
  Container,
  ContainerSticky
} from '../styles/pages/Vendors/Vendors';

const mapStateToProps = ({ app }) => ({ app });

const Vendors: FC<IVendorsProps> = ({ app }) => (
  <Wrapper>
    <Container>
      <ContainerSticky>
        <OffersSearch borderColor="transparent" filters={true} />
      </ContainerSticky>
      <OffersList height="100%" />
    </Container>
  </Wrapper>
);

export default connect(mapStateToProps)(Vendors);
