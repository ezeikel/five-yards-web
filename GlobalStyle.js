import { createGlobalStyle, keyframes } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default createGlobalStyle`
  /* fix fontawesome icon sizes */
  ${dom.css()}

  /* CSS Variables */
  :root {
    /* Colors */
    --color-primary: #04acba;
    --color-black: #2f2f2f;
    --color-white: #ffffff;
    --color-grey: #cccccc;
    --color-dark-grey: #585858;

    --color-facebook: #274e8c;
    --color-google: #db4437;

    /* Spacing */
    --spacing-tiny: 4px;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 32px;
    --spacing-huge: 64px;
    /* Font */
    --primary-font-family: ibm-plex-sans, sans-serif;
    --secondary-font-family: stratos, sans-serif;

    --font-weight-primary-regular: 400;
    --font-weight-primary-medium: 500;
    --font-weight-primary-semi-bold: 600;
    --font-weight-primary-bold: 700;

    --font-weight-secondary-light: 300;
    --font-weight-secondary-regular: 400;
    --font-weight-secondary-medium: 600;
    --font-weight-secondary-semi-bold: 700;

    --default-font-size: 10px;
    --font-size-tiny: 1.4rem;
    --font-size-small: 1.6rem;
    --font-size-medium: 1.8rem;
    --font-size-large: 2rem;
    --font-size-huge: 2.2rem;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: var(--default-font-size);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--primary-font-family);
    color: var(--color-black);
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  hr {
    border: none;
    height: 1px;
    border-top: 1px solid #cccccc;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--color-light-grey);
    /*font-weight: 300;*/
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--color-light-grey);
    font-weight: 300;
  }

  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--color-light-grey);
    font-weight: 300;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--color-light-grey);
    font-weight: 300;
  }

  input, textarea {
    font-size: var(--default);
    color: var(--color-black);
  }

  input[type="text"], input[type="email"], input[type="password"], input[type="number"], input[type="tel"], input[type="date"], input[type="submit"], textarea, select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: 0;
  }
`;

export const spinKeyframe = keyframes`
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(0);
  }
`;
