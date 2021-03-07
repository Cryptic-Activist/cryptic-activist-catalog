import React, { FC, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import {
  FaCircle,
  FaHeart,
  FaHeartBroken,
  FaCog,
  FaPlus
} from 'react-icons/fa';
import { connect } from 'react-redux';

import { IUser } from '../../interfaces/store/reducers/reducers';
import DateFormatter from '../../utils/formatter/date/DateFormatter';

import CurrentOffersList from '../../components/UI/Lists/CurrentOffers/CurrentOffersList';
import FeedbacksList from '../../components/UI/Lists/Feedbacks/FeedbacksList';

import Identicon from '../../assets/img/identicon.png';

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
  FeedbacksListSection,
  InlineSettingsDiv,
  SettingsBtn,
  BtnsDiv
} from '../../styles/pages/Account/Account';

const mapStateToProps = ({ user }) => ({ user });

const Account: FC<any> = ({ user }) => {
  const dateFormatter = new DateFormatter();

  useEffect(() => {
    if (Object.entries(user.data).length === 0) {
      Router.push('/');
    }
  }, [user.data]);

  function diffMonths(dt2, dt1) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24 * 7 * 4;
    return Math.abs(Math.round(diff));
  }

  return (
    <>
      {Object.entries(user.data).length > 0 &&
        !user.loading &&
        user.fetched &&
        user.errors.length === 0 && (
          <Wrapper>
            <Container>
              <Flex>
                <Aside>
                  <Profile>
                    <ProfileImage>
                      <img src={Identicon} alt="Profile" />
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
                            Joined on{' '}
                            <strong>
                              {dateFormatter.formatDateFullDate(
                                user.data.created_at
                              )}
                            </strong>
                          </p>
                        </ProfileInfoListItem>
                      </ProfileInfoList>
                    </ProfileInfo>
                  </Profile>
                </Aside>
                <Main>
                  <VendorNameUsername>
                    <InlineSettingsDiv>
                      <VendorName>{`${user.data.names.first_name} ${user.data.names.last_name}`}</VendorName>
                      <Link href="/account/settings" as="/account/settings">
                        <SettingsBtn>
                          <FaCog />
                        </SettingsBtn>
                      </Link>
                    </InlineSettingsDiv>
                    <VendorUsername>{user.data.username}</VendorUsername>
                    <VendorDescription>
                      Phasellus nisl nunc, luctus eu leo in, semper convallis
                      sapien. Nullam augue ipsum, scelerisque faucibus tincidunt
                      eget, tempus id nisl. Morbi eu lorem a ipsum gravida
                      hendrerit eget at sapien.
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
                    <InlineSettingsDiv>
                      <CurrentOffersListHeading>
                        Current offers
                      </CurrentOffersListHeading>
                      <BtnsDiv>
                        <Link href="/offer/create" as="/offer/create">
                          <SettingsBtn>
                            <FaPlus />
                          </SettingsBtn>
                        </Link>
                        <Link
                          href="/account/offers/settings"
                          as="/account/offers/settings"
                        >
                          <SettingsBtn>
                            <FaCog />
                          </SettingsBtn>
                        </Link>
                      </BtnsDiv>
                    </InlineSettingsDiv>
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
        )}
    </>
  );
};

export default connect(mapStateToProps)(Account);
