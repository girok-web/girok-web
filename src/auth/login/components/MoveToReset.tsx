import { css } from '@emotion/react';
import { typographyMap } from '../../../styles/typography';
import { Link } from 'react-router-dom';

interface MoveToResetProps {
  linkText: string;
}

function MoveToReset({ linkText }: MoveToResetProps) {
  return (
    <Link to="/reset/email" css={css([typographyMap.smallBody])}>
      {linkText}
    </Link>
  );
}

export default MoveToReset;
