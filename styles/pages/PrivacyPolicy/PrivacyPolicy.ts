import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1920px;
  height: 100%;
  padding: 25px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 2030px) {
    width: 95%;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.colors.pages.aboutUs.heading.color};
`;

export const Statement = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.pages.aboutUs.text.color};
  text-align: justify;
`;
