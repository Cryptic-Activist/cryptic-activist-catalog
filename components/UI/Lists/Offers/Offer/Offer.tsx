import React, { FC, useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { FaHeart, FaCircle, FaArrowUp, FaInfo } from 'react-icons/fa';

import { IOffer } from '../../../../../interfaces/components/UI/Lists/Offers/Offer/Offer';

import {
  Container,
  ContainerMobile,
  DivMobile,
  From,
  FromMobile,
  WithFor,
  WithForMobile,
  Rate,
  RateMobile,
  UsernameLink,
  Hearts,
  Status,
  Type,
  Description,
  Tags,
  AvgSpeed,
  CryptoPrice,
  Percent,
  PricePercentDivMobile,
  InfoIcon,
  LimitButtonDiv,
  Button,
  ButtonMobile,
  Limit
} from '../../../../../styles/components/UI/Lists/Offers/Offer/Offer';

const mapStateToProps = ({ app }) => ({ app });

const Offer: FC<IOffer> = ({ app }) => {
  const [username, setUsername] = useState<string>('hello-world-username');

  return (
    <>
      {app.isMobile ? (
        <ContainerMobile>
          <DivMobile>
            <FromMobile>
              <Link href="/vendor/[username]" as={`/vendor/${username}`}>
                <UsernameLink>hello-world-username</UsernameLink>
              </Link>
              <Hearts>
                <FaHeart />
                <p>540</p>
              </Hearts>
              <Status>
                <FaCircle />
                <p>Seen 41 minutes ago</p>
              </Status>
            </FromMobile>
            <WithForMobile>
              <Type>Domestic Wire Transfer</Type>
              <Description>Short payment method description</Description>
              <Tags>
                <div>Receipt required</div>
                <div>No verification needed</div>
              </Tags>
            </WithForMobile>
            <Limit>Limits: 20 - 10,000 USD</Limit>
          </DivMobile>
          <DivMobile>
            <RateMobile>
              <PricePercentDivMobile>
                <CryptoPrice>US$ 34.653.74</CryptoPrice>
                <Percent>
                  <FaArrowUp />
                  <p>0.97%</p>
                  <InfoIcon>
                    <FaInfo />
                  </InfoIcon>
                </Percent>
              </PricePercentDivMobile>
              <ButtonMobile>{app.type ? 'Buy' : 'Sell'}</ButtonMobile>
            </RateMobile>
          </DivMobile>
        </ContainerMobile>
      ) : (
        <Container>
          <From>
            <Link href="/vendor/[username]" as={`/vendor/${username}`}>
              <UsernameLink>hello-world-username</UsernameLink>
            </Link>
            <Hearts>
              <FaHeart />
              <p>540</p>
            </Hearts>
            <Status>
              <FaCircle />
              <p>Seen 41 minutes ago</p>
            </Status>
          </From>
          <WithFor>
            <Type>Domestic Wire Transfer</Type>
            <Description>Short payment method description</Description>
            <Tags>
              <span>Receipt required</span>
              <span>No verification needed</span>
            </Tags>
          </WithFor>
          <AvgSpeed>
            <p>Under a minute</p>
          </AvgSpeed>
          <Rate>
            <CryptoPrice>US$ 34.653.74</CryptoPrice>
            <Percent>
              <FaArrowUp />
              <p>0.97%</p>
              <InfoIcon>
                <FaInfo />
              </InfoIcon>
            </Percent>
            <LimitButtonDiv>
              <Limit>Limits: 20 - 10,000 USD</Limit>
              <Button>{app.type ? 'Buy' : 'Sell'}</Button>
            </LimitButtonDiv>
          </Rate>
        </Container>
      )}
    </>
  );
};
export default connect(mapStateToProps)(Offer);
