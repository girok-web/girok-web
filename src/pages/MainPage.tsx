import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <h2>메인 페이지</h2>
      <Link to="/login">로그인 페이지로 이동</Link>
    </div>
  );
}
