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
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  padding: 20px 14px;
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const TypeDescDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TypeName = styled.h3`
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
`;

export const PeopleChosen = styled.p`
  font-size: 16px;
  span {
    font-size: 17px;
    font-weight: 900;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

export const Price = styled.strong`
  font-size: 16px;
  text-align: right;
  @media (max-width: 370px) {
    text-align: left;
  }
`;

export const Speed = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: flex-end;
  p {
    font-size: 16px;
  }
  span {
    font-size: 16px;
    font-weight: 900;
  }
  @media (max-width: 370px) {
    justify-content: flex-start;
  }
`;

export const LimitsBunttonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export const Limits = styled.p`
  font-size: 16px;
  text-align: right;
  @media (max-width: 370px) {
    text-align: left;
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
  width: fit-content;
  align-self: flex-end;
  &:focus {
    outline: none;
  }
  @media (max-width: 370px) {
    align-self: flex-start;
  }
`;
