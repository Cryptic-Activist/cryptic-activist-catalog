import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999999;
`;

export const Container = styled.form`
  width: 750px;
  max-height: 80%;
  overflow-y: scroll;
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
  @media (max-width: 875px) {
    width: 80%;
  }
  &::-webkit-scrollbar {
    display: none;
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

export const PrivateKeyLabelDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PrivateKeyLabel = styled.label`
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  letter-spacing: 0.04em;
`;

export const PrivateKeyInput = styled.input`
  height: 40px;
  width: 120px;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.input.color};
  letter-spacing: 0.04em;
  border: 1px solid ${(props) => props.theme.colors.input.borderColor};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.input.background};
  transition: all 0.2s ease-in-out 0s;
  &:focus {
    border-color: ${(props) => props.theme.colors.input.focus.borderColor};
    outline: none;
  }
`;

export const VerifyBtn = styled.button`
  height: 40px;
  width: 200px;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  border: 1px solid ${(props) => props.theme.colors.button.border};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 1px;
  background-color: ${(props) => props.theme.colors.button.background};
  color: ${(props) => props.theme.colors.button.text};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const SuccessMsg = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  margin: 15px 0;
  text-align: center;
`;
