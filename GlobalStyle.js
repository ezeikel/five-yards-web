import { createGlobalStyle, keyframes } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default createGlobalStyle`
  /* fix fontawesome icon sizes */
  ${dom.css()}
  /* Font faces */
  @font-face {
     font-family: 'Canted FX Regular';
     src: url('/static/fonts/CantedFX-Regular.woff2') format('woff2');
  }
  @font-face {
     font-family: 'Canted FX Bold';
     src: url('/static/fonts/CantedFX-Bold.woff2') format('woff2');
  }
/* CSS Variables */
:root {
  /* Colors */
  --color-primary: #1ABC9C;
  --color-black: #2E3333;
  --color-white: #FFFFFF;

  /* Spacing */
  --spacing-tiny: 4px;
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 32px;
  --spacing-huge: 64px;
  /* Font */
  --primary-font-family: 'Canted FX Bold', sans-serif;
  --secondary-font-family: 'Canted FX Regular', sans-serif;
  --tertiary-font-family: 'Source Sans Pro', sans-serif;
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
  font-family: var(--tertiary-font-family);
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
.map {
  width: 100%;
  height: 300px;
}
input, textarea {
  font-size: var(--default);
  color: var(--color-black);
}
input[type="text"], input[type="email"], input[type="tel"], input[type="date"], input[type="submit"], textarea, select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  /* border: 0;
  border-radius: 0;
  padding: 1em;
  border: 1px solid #ecf0f1;
  transition: all 0.3s ease-in-out;
  width: 100%;
  font-weight: 300; */
}
/* button[type="submit"] {
  display: block;
  height: 100%;
  width: 100%;
  padding: 15px 90px;
  background-color: var(--color-primary);
  color: var(--color-white);
  transition: background-color 0.3s ease-in-out;
  text-transform: uppercase;
} */
/* button[type="submit"][disabled] {
  opacity: 0.7;
  text-decoration: line-through;
} */
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

export const rotateKeyFrame = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
