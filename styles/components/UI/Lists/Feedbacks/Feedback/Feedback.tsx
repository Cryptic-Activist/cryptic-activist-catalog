import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) =>
    props.theme.colors.components.offersList.list.offer.background};
  border-top: 1px solid
    ${(props) =>
      props.theme.colors.components.offersList.list.offer.borderColor};
  border-bottom: 1px solid
    ${(props) =>
      props.theme.colors.components.offersList.list.offer.borderColor};
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: 54px 0.7fr 2.6fr 0.4fr;
  grid-gap: 10px;
  padding: 20px 14px;
  @media (max-width: 768px) {
    grid-template-columns: 0.3fr 1fr;
  }
  @media (max-width: 510px) {
    grid-template-columns: 0.25fr 1fr;
  }
`;

export const MobileDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid
    ${(props) => props.theme.colors.pages.vendor.aside.profileImage.borderColor};
  box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 100%;
  }
`;

export const UsernameDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Username = styled.a`
  color: ${(props) =>
    props.theme.colors.components.feedbacks.feedback.username.color};
  font-size: 16px;
  cursor: pointer;
`;

export const OfferType = styled.a`
  color: ${(props) =>
    props.theme.colors.components.feedbacks.feedback.offerType.color};
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
`;

export const View = styled.a`
  color: ${(props) =>
    props.theme.colors.components.feedbacks.feedback.view.color};
  font-size: 15px;
  float: right;
  cursor: pointer;
`;

export const Date = styled.p`
  color: ${(props) =>
    props.theme.colors.components.feedbacks.feedback.date.color};
  font-size: 16px;
`;

export const FeedbackType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  svg {
    color: ${(props) =>
      props.theme.colors.components.feedbacks.feedback.feedback.positive.color};
    font-size: 18px;
  }
  span {
    color: ${(props) =>
      props.theme.colors.components.feedbacks.feedback.feedback.positive.color};
    font-size: 16px;
  }
`;

export const Message = styled.p`
  font-size: 16px;
  color: ${(props) =>
    props.theme.colors.components.feedbacks.feedback.message.color};
`;

export const OfferTypeMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
