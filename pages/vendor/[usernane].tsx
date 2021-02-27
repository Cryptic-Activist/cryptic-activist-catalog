import React, { useEffect, useState } from 'react';
import { FaCircle, FaHeart, FaHeartBroken } from 'react-icons/fa';

import Identicon from '../../assets/img/identicon.png';

import CurrentOffersList from '../../components/UI/Lists/CurrentOffers/CurrentOffersList';
import FeedbacksList from '../../components/UI/Lists/Feedbacks/FeedbacksList';

import {
  Flex,
  Wrapper,
  Container,
  Main,
  Profile,
  ProfileImage,
  Aside,
  ProfileInfo,
  ProfileInfoHeader,
  ProfileInfoList,
  ProfileInfoListItem,
  VendorNameUsername,
  VendorName,
  VendorUsername,
  VendorDescription,
  Status,
  Feedbacks,
  PositiveFeedback,
  NegativeFeedback,
  CurrentOffersSection,
  CurrentOffersListHeading,
  FeedbacksListHeading,
  FeedbacksListSection
} from '../../styles/pages/Vendor/Vendor';

const Vendor = ({ username }) => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const nameArr: string[] = username.split('-');
    let auxName: string = '';

    nameArr.forEach((name, i) => {
      auxName +=
        name.substring(0, 1).toUpperCase() + name.substring(1, name.length);

      if (!(i === nameArr.length - 1)) {
        auxName += ' ';
      }
    });

    setName(auxName);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Flex>
          <Aside>
            <Profile>
              <ProfileImage>
                <img src={Identicon} />
              </ProfileImage>
              <ProfileInfo>
                <ProfileInfoHeader>
                  <h3>Information</h3>
                </ProfileInfoHeader>
                <ProfileInfoList>
                  <ProfileInfoListItem>
                    <p>Languages:</p>
                    <div className="languages">
                      <strong>English,</strong>
                      <strong>Spanish</strong>
                    </div>
                  </ProfileInfoListItem>
                  <ProfileInfoListItem>
                    <p>
                      <strong>547</strong> Trades
                    </p>
                  </ProfileInfoListItem>
                  <ProfileInfoListItem>
                    <p>
                      Trusted by <strong>64 people</strong>
                    </p>
                  </ProfileInfoListItem>
                  <ProfileInfoListItem>
                    <p>
                      Blocked by <strong>3 people</strong>
                    </p>
                  </ProfileInfoListItem>
                  <ProfileInfoListItem>
                    <p>
                      Has blocked <strong>2 people</strong>
                    </p>
                  </ProfileInfoListItem>
                  <ProfileInfoListItem>
                    <p>
                      Joined <strong>5 months</strong> ago
                    </p>
                  </ProfileInfoListItem>
                </ProfileInfoList>
              </ProfileInfo>
            </Profile>
          </Aside>
          <Main>
            <VendorNameUsername>
              <VendorName>{name}</VendorName>
              <VendorUsername>{username}</VendorUsername>
              <VendorDescription>
                Phasellus nisl nunc, luctus eu leo in, semper convallis sapien.
                Nullam augue ipsum, scelerisque faucibus tincidunt eget, tempus
                id nisl. Morbi eu lorem a ipsum gravida hendrerit eget at
                sapien.
              </VendorDescription>
            </VendorNameUsername>
            <Status>
              <FaCircle className="online" />
              <p>Online</p>
            </Status>
            <Feedbacks>
              <PositiveFeedback>
                <div className="numbers">
                  <strong>543</strong>
                  <p>Positive feedback</p>
                </div>
                <div className="icon">
                  <FaHeart />
                </div>
              </PositiveFeedback>
              <NegativeFeedback>
                <div className="numbers">
                  <strong>0</strong>
                  <p>Negative feedback</p>
                </div>
                <div className="icon">
                  <FaHeartBroken />
                </div>
              </NegativeFeedback>
            </Feedbacks>
            <CurrentOffersSection>
              <CurrentOffersListHeading>
                Current offers
              </CurrentOffersListHeading>
              <CurrentOffersList />
            </CurrentOffersSection>
            <FeedbacksListSection>
              <FeedbacksListHeading>Feedbacks</FeedbacksListHeading>
              <FeedbacksList />
            </FeedbacksListSection>
          </Main>
        </Flex>
      </Container>
    </Wrapper>
  );
};

Vendor.getInitialProps = async ({ ctx }) => {
  const { asPath } = ctx;

  const username: string = asPath.split('/')[2];

  return { username };
};

export default Vendor;
