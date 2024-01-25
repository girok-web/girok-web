import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResetComplete from './auth/reset/components/ResetComplete';
import ResetEmail from './auth/reset/components/ResetEmail';
import ResetVerification from './auth/reset/components/ResetVerification';
import ResetPassword from './auth/reset/components/ResetPassword';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ResetPage from './pages/ResetPage';
import AuthLayout from './auth/AuthLayout';

const router = createBrowserRouter([
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
            children: [
              {
                path: 'email',
                element: <ResetEmail />,
              },
              {
                path: 'verification',
                element: <ResetVerification />,
              },
              {
                path: 'password',
                element: <ResetPassword />,
              },
              {
                path: 'complete',
                element: <ResetComplete />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
