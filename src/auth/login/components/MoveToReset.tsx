import { Link } from 'react-router-dom';
import Text from '../../../shared/Text';

interface MoveToResetProps {
  linkText: string;
}

function MoveToReset({ linkText }: MoveToResetProps) {
  return (
    <Link to="/reset/email">
      <Text typography="smallBody">{linkText}</Text>
    </Link>
  );
}

export default MoveToReset;
