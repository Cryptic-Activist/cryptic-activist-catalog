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
  grid-template-columns: 0.8fr 1.2fr 0.7fr 1.1fr;
  grid-gap: 10px;
  padding: 20px 14px;
`;

export const ContainerMobile = styled.div`
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
  grid-template-columns: 1.3fr 0.7fr;
  padding: 20px 14px;
`;

export const DivMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const From = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const FromMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const WithFor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const WithForMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Rate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const RateMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const PricePercentDivMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const UsernameLink = styled.a`
  color: ${(props) =>
    props.theme.colors.components.offersList.list.offer.username.color};
  cursor: pointer;
`;

export const Hearts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  svg {
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.username.hearts
        .color};
  }
  p {
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.username.hearts
        .numberColor};
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  svg {
    font-size: 14px;
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.username.status.color
        .away};
  }
  p {
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.username.status
        .statementColor};
  }
`;

export const Type = styled.strong`
  color: ${(props) =>
    props.theme.colors.components.offersList.list.offer.withFor.type.color};
`;

export const Description = styled.p`
  color: ${(props) =>
    props.theme.colors.components.offersList.list.offer.withFor.description
      .color};
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  div {
    background: ${(props) =>
      props.theme.colors.components.offersList.list.offer.withFor.tag
        .background};
    border-radius: 4px;
    font-size: 14px;
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.withFor.tag.color};
    padding: 4px 6px;
  }
  @media (max-width: 670px) {
    flex-wrap: nowrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    div {
      flex: 0 0 auto;
    }
  }
`;

export const AvgSpeed = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  p {
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.avgSpeed.color};
    text-align: right;
  }
`;

export const CryptoPrice = styled.strong`
  font-size: 16px;
  color: ${(props) =>
    props.theme.colors.components.offersList.list.offer.rate.cryptoPrice.color};
  text-align: right;
`;

export const Percent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  svg {
    font-size: 16px;
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.rate.cryptoPrice
        .color};
  }
  p {
    font-size: 16px;
    font-weight: 900;
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.rate.cryptoPrice
        .color};
  }
`;

export const InfoIcon = styled.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: 2px solid
    ${(props) =>
      props.theme.colors.components.offersList.list.offer.rate.percent.info
        .color};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    font-size: 10px;
    color: ${(props) =>
      props.theme.colors.components.offersList.list.offer.rate.percent.info
        .color};
  }
`;

export const LimitButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  height: 100%;
`;

export const Limit = styled.p`
  color: ${(props) =>
    props.theme.colors.components.offersList.list.offer.rate.limit.color};
  font-size: 16px;
  @media (max-width: 670px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  background: ${(props) =>
    props.theme.colors.components.offersList.list.offer.rate.button.background};
  border: 1px solid
    ${(props) =>
      props.theme.colors.components.offersList.list.offer.rate.button
        .borderColor};
  border-radius: 4px;
  color: ${(props) =>
    props.theme.colors.components.offersList.list.offer.rate.button.color};
  padding: 6px 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const ButtonMobile = styled.button`
  background: ${(props) =>
    props.theme.colors.components.offersList.list.offer.rate.button.background};
  border: 1px solid
    ${(props) =>
      props.theme.colors.components.offersList.list.offer.rate.button
        .borderColor};
  border-radius: 4px;
  color: ${(props) =>
    props.theme.colors.components.offersList.list.offer.rate.button.color};
  padding: 6px 10px;
  justify-self: flex-end;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
