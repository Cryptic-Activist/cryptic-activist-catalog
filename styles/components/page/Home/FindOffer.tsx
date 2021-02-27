import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 480px;
  width: 100%;
  background: ${(props) =>
    props.theme.colors.pages.home.findOffer.wrapper.background};
  border-top: 1px solid
    ${(props) => props.theme.colors.pages.home.findOffer.wrapper.borderColor};
  border-bottom: 1px solid
    ${(props) => props.theme.colors.pages.home.findOffer.wrapper.borderColor};
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  @media (max-width: 1350px) {
    height: unset;
  }
`;

export const Container = styled.div`
  width: 1920px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
  @media (max-width: 2030px) {
    width: 95%;
  }
  @media (max-width: 1350px) {
    flex-direction: column;
    margin: 24px auto;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OffersList = styled.div`
  width: 100%;
  height: 430px;
  margin-left: 5px;
  background: ${(props) =>
    props.theme.colors.pages.home.findOffer.findOfferOffersList.background};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  border: 1px solid
    ${(props) =>
      props.theme.colors.pages.home.findOffer.findOfferOffersList.borderColor};
  transition: all 0.2s ease-in-out;
`;
