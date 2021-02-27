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
    props.theme.colors.pages.home.findOffer.findOfferOffersList.background};
  padding: 4px 14px;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 0.7fr 1.1fr;
  z-index: 1;
`;

export const HeaderMobile = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.colors.pages.home.findOffer.findOfferOffersList.borderColor};
  background: ${(props) =>
    props.theme.colors.pages.home.findOffer.findOfferOffersList.background};
  padding: 4px 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 1;
`;

export const HeaderTitleLeft = styled.h3`
  font-size: 14px;
  align-self: center;
`;

export const HeaderTitleRight = styled.h3`
  font-size: 14px;
  align-self: center;
  text-align: right;
  color: ${(props) => props.theme.colors.components.offersList.header.color};
`;

export const SortButton = styled.button`
  font-size: 15px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  transform: translateY(3px);
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
