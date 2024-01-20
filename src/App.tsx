import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPassword from './auth/signup/components/SignupPassword';
import SignupComplete from './auth/signup/components/SignupComplete';
import LoginEmail from './auth/login/components/LoginEmail';
import LoginPassword from './auth/login/components/LoginPassword';
import ResetComplete from './auth/reset/components/ResetComplete';
import ResetEmail from './auth/reset/components/ResetEmail';
import ResetVerification from './auth/reset/components/ResetVerification';
import ResetPassword from './auth/reset/components/ResetPassword';
import SingupEmail from './auth/signup/components/SignupEmail';
import SignupVerification from './auth/signup/components/SignupVerification';
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
            children: [
              {
                path: 'email',
                element: <LoginEmail />,
              },
              {
                path: 'password',
                element: <LoginPassword />,
              },
            ],
          },
          {
            path: 'signup',
            element: <SignupPage />,
            children: [
              {
                path: 'email',
                element: <SingupEmail />,
              },
              {
                path: 'verification',
                element: <SignupVerification />,
              },
              {
                path: 'password',
                element: <SignupPassword />,
              },
              {
                path: 'complete',
                element: <SignupComplete />,
              },
            ],
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
