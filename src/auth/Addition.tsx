import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { colorPalette } from '../styles/colorPalette';

function Addition({ children }: PropsWithChildren) {
  return (
    <span
      css={css({
        color: colorPalette.gray3,
      })}
    >
      {children}
    </span>
  );
}

export default Addition;
