import { css } from '@emotion/react';

export const typographyMap = {
  headline: css`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.3em;
  `,

  subString: css`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.02rem;
    line-height: 19.09px;
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
    // FIXME: line-height 추후 Figma에 반영되면 수정
    line-height: 17px;
  `,
};

export type Typography = keyof typeof typographyMap;
