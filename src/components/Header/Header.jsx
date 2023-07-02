import UserMenu from 'components/UserMenu/UserMenu';
import css from './Header.module.css';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from 'redux/auth/slice';

export default function Header() {
  const isLogedIn = useSelector(selectIsLogedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLogedIn && <UserMenu />}
    </header>
  );
}
