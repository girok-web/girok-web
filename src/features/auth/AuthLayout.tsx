import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { colorPalette } from '../../styles/colorPalette';

function AuthLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colorPalette.gray0};
`;

export default AuthLayout;
