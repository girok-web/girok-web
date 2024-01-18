import { css } from '@emotion/react';

export default css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src:
      local('Pretendard Black'),
      url(./assets/fonts/Pretendard-Black.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src:
      local('Pretendard ExtraBold'),
      url(./assets/fonts/Pretendard-ExtraBold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src:
      local('Pretendard Bold'),
      url(./assets/fonts/Pretendard-Bold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src:
      local('Pretendard SemiBold'),
      url(./assets/fonts/Pretendard-SemiBold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src:
      local('Pretendard Medium'),
      url(./assets/fonts/Pretendard-Medium.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src:
      local('Pretendard Regular'),
      url(./assets/fonts/Pretendard-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src:
      local('Pretendard Light'),
      url(./assets/fonts/Pretendard-Light.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src:
      local('Pretendard ExtraLight'),
      url(./assets/fonts/Pretendard-ExtraLight.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src:
      local('Pretendard Thin'),
      url(./assets/fonts/Pretendard-Thin.woff2) format('woff2');
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
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
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
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
