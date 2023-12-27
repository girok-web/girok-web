import stylex from '@stylexjs/stylex';

export const typography = stylex.create({
  headline: {
    fontSize: '32px',
    fontWeight: '500',
    letterSpacing: '-0.02em',
    lineHeight: '1.3em',
  },
  body1: {
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '-0.01em',
  },
  body2: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '-0.01em',
  },
  smallBody: {
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '-0.01em',
  },
});
