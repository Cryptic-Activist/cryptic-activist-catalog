import styled from 'styled-components';
import { Spin } from '../../../../animations/Animations';

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const FormDiv = styled.div`
  position: fixed;
  width: 250px;
  max-height: 455px;
  overflow-y: scroll;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.colors.primary};
  padding: 20px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  z-index: 9;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 520px) {
    max-height: 85%;
    overflow-y: scroll;
  }
  @media (max-height: 440px) {
    max-height: 80%;
  }
  @media (max-height: 440px) {
    max-height: 75%;
  }
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 17px;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const SplitDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 900;
  letter-spacing: 0.04em;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
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

export const Submit = styled.button`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
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
  /* &:hover {
    color: ${(props) => props.theme.colors.button.hover.text};
    background-color: ${(props) => props.theme.colors.button.hover.background};
  }
  &:active {
    color: ${(props) => props.theme.colors.button.active.text};
    background-color: ${(props) => props.theme.colors.button.active.background};
  } */
`;

export const WarningList = styled.div`
  width: 100%;
  margin: 10px 0;
  h3 {
    font-size: 15px;
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.colors.text};
  }
  ul {
    width: 100%;
  }
`;

export const Warning = styled.li`
  list-style: none;
  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.colors.text};
    display: block;
    position: absolute;
    margin-top: 6px;
  }
  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
    padding-left: 10px;
  }
`;

export const Button = styled.button`
  display: table;
  margin: 4px auto;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};
    animation: ${Spin} 0.5s linear infinite;
  }
`;

export const Required = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  margin-left: 3px;
`;

export const InfoBtn = styled.span`
  height: 16px;
  width: 16px;
  display: inline-block;
  border-radius: 50px;
  margin-left: 5px;
  transform: translateY(3px);
  border: ${(props) => props.theme.colors.a.background};
  background: ${(props) => props.theme.colors.a.background};
  svg {
    font-size: 10px;
    color: ${(props) => props.theme.colors.a.text};
    transform: translate(3px, -2px);
  }
`;

export const SuccessP = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;
