import { Avatar, Button } from '@chakra-ui/react';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/operations';
import { selectUserName } from 'redux/auth/slice';

export default function UserMenu() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  return (
    <div className={css.userMenu}>
      <Avatar name={`${username}`} />
      <Button
        colorScheme="red"
        variant="ghost"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
}
