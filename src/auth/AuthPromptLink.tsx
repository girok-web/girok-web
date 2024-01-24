import { css } from '@emotion/react';
import { colorPalette } from '../styles/colorPalette';
import { Link } from 'react-router-dom';

interface AuthPromptLinkProps {
  message: string;
  linkText: string;
  to: string;
}

function AuthPromptLink({ message, linkText, to }: AuthPromptLinkProps) {
  return (
    <span
      css={css({
        color: colorPalette.gray3,
      })}
    >
      {message}{' '}
      <Link to={to} css={{ color: colorPalette.black }}>
        {linkText}
      </Link>
    </span>
  );
}

export default AuthPromptLink;
