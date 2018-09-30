import { injectGlobal, keyframes } from 'styled-components';

export default injectGlobal`
/* CSS Variables */
:root {
  /* Colors */
  --color-primary: #1abc9c;
  /* --color-primary: #F7E7CE; */
  --color-secondary: #F1D3D1;
  --color-black: #2E3333;
  --color-white: #fff;
  --color-gold: #CDA349;
  --color-gold-lighter: #d4af61;
  --color-light-grey: #ecf0f1;
  --color-red: #e74c3c;
  --color-dark-red: #c0392b;
  --color-green: #2ecc71;
  --color-grey: #bdc3c7;
  --color-gold-star: #f1c40f;
  /* Spacing */
  --spacing-tiny: 4px;
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 32px;
  --spacing-huge: 64px;
  /* Font */
  --default-font-family: 'proxima-nova', sans-serif;
  --default-font-size: 16px;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: var(--default-font-family);
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