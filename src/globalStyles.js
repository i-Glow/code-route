import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url('./src/assets/fonts/Poppins-Regular.ttf') format('truetype');
  }

  :root {
    --dark-blue: #00005C;
    --navy: #0008C1;
    --blue: #2146C7;
    --beige: #E6CBA8;
    --winter: #F9F2EE;
    --box-shadow: rgb(0 19 53 / 6%) 0px 9px 27px, rgb(0 19 53 / 4%) 0px 3.75998px 11.28px, rgb(0 19 53 / 4%) 0px 2.01027px 6.0308px, rgb(0 19 53 / 3%) 0px 1.12694px 3.38082px, rgb(0 19 53 / 2%) 0px 0.598509px 1.79553px, rgb(0 19 53 / 2%) 0px 0.249053px 0.747159px;
  }

  * {
    font-family: "Poppins", Arial ,sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    /* border: 1px solid red; */
  }
`;
