import { css } from '@emotion/react';

export const typography = {
  headline: css`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.3em;
  `,

  body1: css`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.01em;
  `,

  body2: css`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,

  smallBody: css`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
};

export type Typography = keyof typeof typography;
