import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { typographyMap } from '../styles/typography';
import { colorPalette } from '../styles/colorPalette';
import SidebarCards from '../features/sidebar-card/SidebarCards';
import styled from '@emotion/styled';

export default function MainPage() {
  return (
    <Layout>
      <SidebarCards />
      <div>
        <h2
          css={css([
            typographyMap.headline,
            {
              color: colorPalette.darkGray,
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
              typographyMap.body2,
              {
                color: colorPalette.red,
              },
            ])}
            to="/login"
          >
            로그인
          </Link>
          <Link
            css={css([
              typographyMap.body2,
              {
                color: colorPalette.red,
              },
            ])}
            to="/signup"
          >
            회원가입
          </Link>
          <Link
            css={css([
              typographyMap.body2,
              {
                color: colorPalette.red,
              },
            ])}
            to="/reset"
          >
            비밀번호 초기화
          </Link>
        </nav>
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
`;
