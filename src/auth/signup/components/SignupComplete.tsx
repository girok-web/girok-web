import { useNavigate } from 'react-router-dom';
import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';

export default function SignupComplete() {
  const navigate = useNavigate();

  return (
    <SignForm>
      <SignForm.Title name="Sign up complete!" />
      <Spacing size={8} />
      <SignForm.Description content="Welcome." />
      <Spacing size={216} />
      <SignForm.Button role="link" type="button" onClick={() => navigate('/login')}>
        Sign in
      </SignForm.Button>
    </SignForm>
  );
}
