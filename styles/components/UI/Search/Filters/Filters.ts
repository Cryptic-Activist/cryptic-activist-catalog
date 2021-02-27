import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Heading = styled.h1`
  font-size: 14px;
  color: ${(props) =>
    props.theme.colors.components.search.filters.heading.color};
`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CategoryH2 = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
