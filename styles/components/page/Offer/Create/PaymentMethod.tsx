import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1920px;
  height: 100%;
  padding: 25px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
  @media (max-width: 2030px) {
    width: 95%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Heading = styled.h1`
  font-size: 32px;
  color: ${(props) =>
    props.theme.colors.components.pages.offer.create.paymentMethod.heading
      .color};
`;

export const ChooseCryptocurrency = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ChooseCryptocurrencyHeading = styled.h2`
  font-size: 18px;
  color: ${(props) =>
    props.theme.colors.components.pages.offer.create.paymentMethod
      .chooseCryptocurrency.heading.color};
`;

export const ChooseCryptocurrencyBtn = styled.button`
  border: 1px solid
    ${(props) =>
      props.theme.colors.components.pages.offer.create.paymentMethod
        .chooseCryptocurrency.button.borderColor};
  background: ${(props) =>
    props.theme.colors.components.pages.offer.create.paymentMethod
      .chooseCryptocurrency.button.background};
  width: fit-content;
  padding: 12px 15px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  gap: 7px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  svg {
    font-size: 30px;
  }
  p {
    color: ${(props) =>
      props.theme.colors.components.pages.offer.create.paymentMethod
        .chooseCryptocurrency.button.color};
    font-size: 24px;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: ${(props) =>
      props.theme.colors.components.pages.offer.create.paymentMethod
        .chooseCryptocurrency.button.hover.borderColor};
  }
`;
