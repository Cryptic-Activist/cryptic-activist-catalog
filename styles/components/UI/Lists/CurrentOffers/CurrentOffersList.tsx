import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.theme.colors.pages.home.findOffer.findOfferOffersList.background};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  border: 1px solid
    ${(props) =>
      props.theme.colors.pages.home.findOffer.findOfferOffersList.borderColor};
  transition: all 0.2s ease-in-out;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.colors.pages.home.findOffer.findOfferOffersList.borderColor};
  background: ${(props) =>
    props.theme.colors.components.currentVendorOffers.header.background};
  display: flex;
  flex-direction: row;
  z-index: 1;
  .selected {
    background: ${(props) =>
      props.theme.colors.components.currentVendorOffers.header.buttons.active
        .background};
    color: ${(props) =>
      props.theme.colors.components.currentVendorOffers.header.buttons.active
        .color};
  }
  @media (max-width: 370px) {
    justify-content: space-between;
  }
`;

export const HeaderTitleLeft = styled.button`
  font-size: 14px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${(props) =>
    props.theme.colors.components.currentVendorOffers.header.buttons.deactive
      .background};
  color: ${(props) =>
    props.theme.colors.components.currentVendorOffers.header.buttons.deactive
      .color};
  border: none;
  cursor: pointer;
  padding: 0px 14px;
  &:focus {
    outline: none;
  }
  @media (max-width: 311px) {
    padding: 0 7px;
    font-size: 13px;
  }
  @media (max-width: 281px) {
    padding: 0 3px;
  }
`;

export const HeaderTitle = styled.button`
  font-size: 14px;
  height: 100%;
  background: ${(props) =>
    props.theme.colors.components.currentVendorOffers.header.buttons.deactive
      .background};
  color: ${(props) =>
    props.theme.colors.components.currentVendorOffers.header.buttons.deactive
      .color};
  border: none;
  cursor: pointer;
  padding: 0px 14px;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  @media (max-width: 311px) {
    padding: 0 7px;
    font-size: 13px;
  }
  @media (max-width: 281px) {
    padding: 0 3px;
  }
`;

export const List = styled.div`
  background: ${(props) =>
    props.theme.colors.components.offersList.list.background};
  overflow-y: scroll;
  margin-top: -5px;
  padding-top: 8px;
  border-radius: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
