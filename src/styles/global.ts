import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #root {
    width: 100vw;
    height: 100vh;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
`;
