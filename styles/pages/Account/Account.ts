import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1920px;
  height: 100%;
  padding: 25px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 2030px) {
    width: 95%;
  }
  @media (max-width: 1350px) {
    flex-direction: column;
    margin: 24px auto;
    gap: 35px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  width: 245px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Profile = styled.div`
  width: 100%;
  height: fit-content;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: row;
    position: relative;
    top: 0;
  }
  @media (max-height: 650px) {
    position: relative;
    top: 0;
  }
  @media (max-width: 574px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.div`
  width: 245px;
  height: 245px;
  border-radius: 4px;
  border: 1px solid
    ${(props) => props.theme.colors.pages.vendor.aside.profileImage.borderColor};
  box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  @media (max-width: 574px) {
    margin: 0 auto;
  }
`;

export const ProfileInfo = styled.div`
  width: 245px;
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${(props) => props.theme.colors.pages.vendor.aside.profileImage.borderColor};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProfileInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.pages.vendor.aside.information.borderColor};
  background: ${(props) =>
    props.theme.colors.pages.vendor.aside.information.background};
  border-radius: 4px;
  padding: 10px 14px;
  h3 {
    font-size: 16px;
    color: ${(props) =>
      props.theme.colors.pages.vendor.aside.information.color};
  }
`;

export const ProfileInfoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileInfoListItem = styled.div`
  width: 100%;
  padding: 14px;
  color: ${(props) => props.theme.colors.pages.vendor.aside.information.color};
  .languages {
    display: flex;
    flex-direction: row;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 4px;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const VendorNameUsername = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InlineSettingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SettingsBtn = styled.a`
  border: 1px solid
    ${(props) => props.theme.colors.pages.vendor.aside.information.borderColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  cursor: pointer;
  svg {
    font-size: 19px;
  }
`;

export const VendorName = styled.h1`
  font-size: 32px;
  color: ${(props) =>
    props.theme.colors.pages.vendor.main.vendorNamesDescription.color};
  @media (max-width: 991px) {
    font-size: 30px;
  }
  @media (max-width: 850px) {
    font-size: 28px;
  }
  @media (max-width: 450px) {
    font-size: 26px;
  }
`;

export const VendorUsername = styled.h2`
  font-size: 16px;
  font-weight: 100;
  color: ${(props) =>
    props.theme.colors.pages.vendor.main.vendorNamesDescription.color};
`;

export const VendorDescription = styled.p`
  color: ${(props) =>
    props.theme.colors.pages.vendor.main.vendorNamesDescription.color};
  font-size: 16px;
  margin-top: 15px;
`;

export const Status = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  .online {
    font-size: 14px;
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.username.status.color
        .online};
  }
  .offiline {
    font-size: 14px;
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.username.status.color
        .away};
  }
  p {
    font-size: 16px;
    color: ${(props) =>
      props.theme.colors.pages.vendor.main.vendorNamesDescription.color};
  }
`;

export const Feedbacks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const PositiveFeedback = styled.div`
  width: 210px;
  height: 75px;
  display: flex;
  padding: 12px 10px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.theme.colors.pages.vendor.main.feedbacks.positive.borderColor};
  background: ${(props) =>
    props.theme.colors.pages.vendor.main.feedbacks.positive.background};
  .numbers {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    strong {
      color: ${(props) =>
        props.theme.colors.pages.vendor.main.feedbacks.positive.color};
      font-weight: 900;
    }
    p {
      font-size: 13px;
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-items: center;
    svg {
      color: ${(props) =>
        props.theme.colors.pages.vendor.main.feedbacks.positive.color};
      font-size: 24px;
    }
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const NegativeFeedback = styled.div`
  width: 210px;
  height: 75px;
  display: flex;
  padding: 12px 10px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.theme.colors.pages.vendor.main.feedbacks.negative.borderColor};
  background: ${(props) =>
    props.theme.colors.pages.vendor.main.feedbacks.negative.background};
  .numbers {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    strong {
      color: ${(props) =>
        props.theme.colors.pages.vendor.main.feedbacks.negative.color};
      font-weight: 900;
    }
    p {
      font-size: 13px;
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-items: center;
    svg {
      color: ${(props) =>
        props.theme.colors.pages.vendor.main.feedbacks.negative.color};
      font-size: 24px;
    }
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const CurrentOffersSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CurrentOffersListHeading = styled.h2`
  font-size: 18px;
`;

export const BtnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FeedbacksListSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FeedbacksListHeading = styled.h2`
  font-size: 18px;
`;
