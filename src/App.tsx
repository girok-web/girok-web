import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ResetPage from './pages/ResetPage';
import AuthLayout from './features/auth/AuthLayout';

const router = createBrowserRouter(
  [
    {
      id: 'root',
      path: '/',
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: 'login',
              element: <LoginPage />,
            },
            {
              path: 'signup',
              element: <SignupPage />,
            },
            {
              path: 'reset',
              element: <ResetPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/girok-web',
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
