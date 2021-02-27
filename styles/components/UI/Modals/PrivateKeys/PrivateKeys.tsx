import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 999999;
`;

export const Container = styled.div`
  width: 680px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  z-index: 999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  @media (max-width: 680px) {
    width: 80%;
  }
`;

export const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
  font-weight: 900;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.25rem;
`;

export const Instructions = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export const PrivateKeysList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PrivateKey = styled.div`
  background: ${(props) => props.theme.colors.a.background};
  color: ${(props) => props.theme.colors.a.text};
  padding: 4px 6px;
  border-radius: 3px;
`;

export const CloseModal = styled.button`
  color: ${(props) => props.theme.colors.a.text};
  background: ${(props) => props.theme.colors.a.background};
  border: 1px solid ${(props) => props.theme.colors.a.border};
  border-radius: 6px;
  width: fit-content;
  margin: 0 auto;
  padding: 6px 8px;
  font-size: 16px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
