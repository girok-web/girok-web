import { useNavigate } from 'react-router-dom';
import SignForm from '../../SignForm';
import { Spacing } from '../../../../shared/Spacing';

export default function ResetComplete() {
  const navigate = useNavigate();

  return (
    <SignForm>
      <SignForm.Title name="Your password has been successfully reset!" />
      <Spacing size={197} />
      <SignForm.Button role="link" type="button" onClick={() => navigate('/login')}>
        Go to Sign in page
      </SignForm.Button>
    </SignForm>
  );
}
