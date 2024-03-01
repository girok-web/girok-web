import { css } from '@emotion/react';

const weight = {
  regular: 400,
  medium: 500,
  semibold: 600,
};

export const baseTypography = {
  headline1: css`
    font-size: 32px;
    letter-spacing: -0.02em;
    line-height: 125%;
    font-weight: ${weight.medium};
  `,
  headline2: css`
    font-size: 24px;
    letter-spacing: -0.03em;
    line-height: 125%;
    font-weight: ${weight.medium};
  `,
  body0: css`
    font-size: 20px;
    letter-spacing: -0.01em;
    font-weight: ${weight.regular};
  `,
  body1: css`
    font-size: 16px;
    letter-spacing: -0.01em;
    line-height: 140%;
    font-weight: ${weight.regular};
  `,
  body2: css`
    font-size: 14px;
    letter-spacing: -0.01em;
    line-height: 130%;
    font-weight: ${weight.regular};
  `,
  body3: css`
    font-size: 12px;
    letter-spacing: -0.01em;
    line-height: 130%;
    font-weight: ${weight.regular};
  `,
};

export const typographyMap = {
  headline1: css`
    ${baseTypography.headline1};
  `,

  headline2: css`
    ${baseTypography.headline2};
  `,

  body0: css`
    ${baseTypography.body0};
  `,

  body1_r: css`
    ${baseTypography.body1};
  `,
  body1_m: css`
    ${baseTypography.body1};
    font-weight: ${weight.medium};
  `,
  body1_sb: css`
    ${baseTypography.body1};
    font-weight: ${weight.semibold};
  `,

  body2_r: css`
    ${baseTypography.body1};
  `,
  body2_m: css`
    ${baseTypography.body2};
    font-weight: ${weight.medium};
  `,
  body2_sb: css`
    ${baseTypography.body2};
    font-weight: ${weight.semibold};
  `,

  body3_r: css`
    ${baseTypography.body3};
  `,
  body3_m: css`
    ${baseTypography.body3};
    font-weight: ${weight.medium};
  `,
};

export type Typography = keyof typeof typographyMap;
