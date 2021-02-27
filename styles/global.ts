import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.mainBackground};
    transition: all 0.2s ease-in-out;
  }

  html {
    overflow-y: overlay;
    overflow-x: hidden;
  }

  .noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body::-webkit-scrollbar {
    width: 10px;
    background-color: ${(props) => props.theme.colors.mainBackground};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid #000;
  }
`;
