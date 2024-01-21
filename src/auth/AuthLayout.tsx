import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

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
`;

export default AuthLayout;
