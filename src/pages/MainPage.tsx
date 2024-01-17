import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { typography } from '../styles/typography';
import { color } from '../styles/color';

export default function MainPage() {
  return (
    <div>
      <h2
        css={css([
          typography.headline,
          {
            color: color.darkGray,
          },
        ])}
      >
        메인 페이지
      </h2>
      <nav
        css={css({
          display: 'flex',
          gap: 20,
        })}
      >
        <Link
          css={css([
            typography.body2,
            {
              color: color.red,
            },
          ])}
          to="/login/email"
        >
          로그인
        </Link>
        <Link
          css={css([
            typography.body2,
            {
              color: color.red,
            },
          ])}
          to="/signup/email"
        >
          회원가입
        </Link>
        <Link
          css={css([
            typography.body2,
            {
              color: color.red,
            },
          ])}
          to="/reset/email"
        >
          비밀번호 초기화
        </Link>
      </nav>
    </div>
  );
}
