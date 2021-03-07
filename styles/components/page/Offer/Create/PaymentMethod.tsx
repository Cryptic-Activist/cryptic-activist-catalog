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
  gap: 15px;
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
