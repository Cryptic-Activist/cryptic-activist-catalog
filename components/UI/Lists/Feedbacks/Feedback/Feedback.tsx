import React, { FC } from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { connect } from 'react-redux';

import Identicon from '../../../../../assets/img/identicon.png';

import { IApp } from '../../../../../interfaces/store/reducers/reducers';

import {
  Container,
  ProfileImage,
  UsernameDate,
  OfferType,
  Username,
  View,
  Date,
  FeedbackType,
  Message,
  OfferTypeMessage,
  MobileDiv
} from '../../../../../styles/components/UI/Lists/Feedbacks/Feedback/Feedback';

const mapStateToProps = ({ app }) => ({ app });

const Feedback: FC<{ app: IApp }> = ({ app }) => (
  <Container>
    {app.isMobile ? (
      <>
        <MobileDiv>
          <ProfileImage>
            <img src={Identicon} alt="Profile" />
          </ProfileImage>
          <UsernameDate>
            <Link href="/vendor/[username]" as="/vendor/username-new">
              <Username>username-new</Username>
            </Link>
            <Date>Jan 4, 2021</Date>
            <FeedbackType>
              <FaHeart />
              <span>Positive</span>
            </FeedbackType>
          </UsernameDate>
        </MobileDiv>
        <div>
          <OfferTypeMessage>
            <OfferType>Bank Transfer</OfferType>
            <Message>
              Maecenas ante lorem, blandit sit amet interdum quis, consequat vel
              ipsum. Nullam ut ultricies leo. In at est velit. Etiam vitae
              ultrices sem, nec tristique lorem. Duis mollis imperdiet libero et
              iaculis.
            </Message>
            <View>View offer</View>
          </OfferTypeMessage>
        </div>
      </>
    ) : (
      <>
        <div>
          <ProfileImage>
            <img src={Identicon} alt="Profile" />
          </ProfileImage>
        </div>
        <UsernameDate>
          <Link href="/vendor/[username]" as="/vendor/username-new">
            <Username>username-new</Username>
          </Link>
          <Date>Jan 4, 2021</Date>
          <FeedbackType>
            <FaHeart />
            <span>Positive</span>
          </FeedbackType>
        </UsernameDate>
        <OfferTypeMessage>
          <OfferType>Bank Transfer</OfferType>
          <Message>
            Maecenas ante lorem, blandit sit amet interdum quis, consequat vel
            ipsum. Nullam ut ultricies leo. In at est velit. Etiam vitae
            ultrices sem, nec tristique lorem. Duis mollis imperdiet libero et
            iaculis.
          </Message>
        </OfferTypeMessage>
        <div>
          <View>View offer</View>
        </div>
      </>
    )}
  </Container>
);

export default connect(mapStateToProps)(Feedback);
