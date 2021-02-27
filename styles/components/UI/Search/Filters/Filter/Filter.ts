import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxChecked = styled.div`
  border: 1px solid
    ${(props) =>
      props.theme.colors.components.search.filters.checkbox.borderColor};
  background: ${(props) =>
    props.theme.colors.components.search.filters.checkbox.background};
  width: 20px;
  height: 20px;
  border-radius: 4px;
  box-shadow: inset 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  div {
    height: 6px;
    width: 6px;
    background: ${(props) =>
      props.theme.colors.components.search.filters.checkbox.checkColor};
    border-radius: 50px;
    display: block;
  }
`;

export const CheckboxUnchecked = styled.div`
  border: 1px solid
    ${(props) =>
      props.theme.colors.components.search.filters.checkbox.borderColor};
  background: ${(props) =>
    props.theme.colors.components.search.filters.checkbox.background};
  width: 20px;
  height: 20px;
  border-radius: 4px;
  box-shadow: inset 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
