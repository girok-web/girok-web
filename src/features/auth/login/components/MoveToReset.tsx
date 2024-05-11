import { Link } from 'react-router-dom';
import Text from '../../../../components/Text';

interface MoveToResetProps {
  linkText: string;
}

function MoveToReset({ linkText }: MoveToResetProps) {
  return (
    <Link to="/reset/email">
      <Text typography="body2_r">{linkText}</Text>
    </Link>
  );
}

export default MoveToReset;
