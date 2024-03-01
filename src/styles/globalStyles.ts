import { css } from '@emotion/react';

export default css`
  @font-face {
    font-weight: 900;
    font-family: Pretendard;
    src:
      local('Pretendard Black'),
      url('./assets/fonts/Pretendard-Black.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-weight: 800;
    font-family: Pretendard;
    src:
      local('Pretendard ExtraBold'),
      url('./assets/fonts/Pretendard-ExtraBold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-weight: 700;
    font-family: Pretendard;
    src:
      local('Pretendard Bold'),
      url('./assets/fonts/Pretendard-Bold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-weight: 600;
    font-family: Pretendard;
    src:
      local('Pretendard SemiBold'),
      url('./assets/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-weight: 500;
    font-family: Pretendard;
    src:
      local('Pretendard Medium'),
      url('./assets/fonts/Pretendard-Medium.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-weight: 400;
    font-family: Pretendard;
    src:
      local('Pretendard Regular'),
      url('./assets/fonts/Pretendard-Regular.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-weight: 300;
    font-family: Pretendard;
    src:
      local('Pretendard Light'),
      url('./assets/fonts/Pretendard-Light.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-weight: 200;
    font-family: Pretendard;
    src:
      local('Pretendard ExtraLight'),
      url('./assets/fonts/Pretendard-ExtraLight.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-weight: 100;
    font-family: Pretendard;
    src:
      local('Pretendard Thin'),
      url('./assets/fonts/Pretendard-Thin.woff2') format('woff2');
    font-display: swap;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* a-style reset */
  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    background-color: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
