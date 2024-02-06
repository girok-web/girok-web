import { CSSProperties } from 'react';
import { Color, colorPalette } from '../styles/colorPalette';
import { Typography, typographyMap } from '../styles/typography';
import styled from '@emotion/styled';

interface TextProps {
  typography: Typography;
  color?: Color;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
}

const Text = styled.span<TextProps>(
  ({ typography = 'body2' }) => typographyMap[typography],
  ({ color = 'black', display, textAlign }) => ({
    color: colorPalette[color],
    display,
    textAlign,
  }),
);

export default Text;
