import styled from 'styled-components';

export const Container = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: ${(props) =>
    (props.borderColor !== 'transparent' ? '4px 14px 14px 14px;' : '0;')}
  background: ${(props) =>
    props.theme.colors.pages.home.findOffer.findOfferOffersList.background};
  border-radius: 4px;
  ${(props) =>
    (props.borderColor !== 'transparent'
      ? 'box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;'
      : '')}

  border: 1px solid ${(props) => props.borderColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 1350px) {
    width: 100%;
  }
`;

export const TopBtnsDiv = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.colors.components.search.offersSearch.topButtonsDiv
        .borderBottomColor};
  .selected {
    border-bottom: 2px solid
      ${(props) =>
        props.theme.colors.components.search.offersSearch.topButtonsDiv.button
          .borderColor};
  }
`;

export const TopBtn = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  font-size: 16px;
  font-weight: 700;
  padding: 0 25px;
  transform: translateY(1px);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  /*   @media (max-width: 1350px) {
    flex-direction: row;
  } */
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FieldLabel = styled.label`
  font-size: 14px;
  color: ${(props) =>
    props.theme.colors.components.search.offersSearch.form.label};
  font-weight: 900;
`;

export const FieldSelectCrypto = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.colors.components.search.offersSearch.form.selectCryptocurrency
      .color};
  border: 1px solid
    ${(props) =>
      props.theme.colors.components.search.offersSearch.form
        .selectCryptocurrency.borderColor};
  background: transparent;
  border-radius: 4px;
  width: fit-content;
`;

export const FieldSelectPaymentMethod = styled.button`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.theme.colors.components.search.offersSearch.form.selectDefault
        .borderColor};
  background: ${(props) =>
    props.theme.colors.components.search.offersSearch.form.selectDefault
      .background};
  border-radius: 4px;
  width: 100%;
  p {
    color: ${(props) =>
      props.theme.colors.components.search.offersSearch.form.selectDefault
        .color};
    font-size: 16px;
  }
  button {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid
      ${(props) =>
        props.theme.colors.components.search.offersSearch.form.selectDefault
          .borderColor};
    background: ${(props) =>
      props.theme.colors.components.search.offersSearch.form.selectDefault
        .background};
    color: ${(props) =>
      props.theme.colors.components.search.offersSearch.form.selectDefault
        .color};
    font-size: 14px;
  }
`;

export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const InfoIcon = styled.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: 2px solid
    ${(props) =>
      props.theme.colors.components.search.offersSearch.form.info.color};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    font-size: 10px;
    color: ${(props) =>
      props.theme.colors.components.search.offersSearch.form.info.color};
  }
`;

export const InfoCryptocurrencyCurrentPrice = styled.span`
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.02rem;
  color: ${(props) =>
    props.theme.colors.components.search.offersSearch.form.info.color};
`;

export const SubmitButton = styled.button`
  background: ${(props) =>
    props.theme.colors.components.search.offersSearch.form.submitButton
      .background};
  color: ${(props) =>
    props.theme.colors.components.search.offersSearch.form.submitButton.color};
  border: 1px solid
    ${(props) =>
      props.theme.colors.components.search.offersSearch.form.submitButton
        .borderColor};
  text-align: left;
  padding: 10px;
  height: 50px;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 0.02rem;
`;
