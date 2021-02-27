import React, { FC } from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

import Identicon from '../../../../../assets/img/identicon.png';

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
  OfferTypeMessage
} from '../../../../../styles/components/UI/Lists/Feedbacks/Feedback/Feedback';

const Feedback: FC = () => {
  return (
    <Container>
      <div>
        <ProfileImage>
          <img src={Identicon} />
        </ProfileImage>
      </div>
      <UsernameDate>
        <Link href="/vendor/[username]" as={`/vendor/username-new`}>
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
          ipsum. Nullam ut ultricies leo. In at est velit. Etiam vitae ultrices
          sem, nec tristique lorem. Duis mollis imperdiet libero et iaculis.
        </Message>
      </OfferTypeMessage>
      <div>
        <View>View offer</View>
      </div>
    </Container>
  );
};

export default Feedback;
