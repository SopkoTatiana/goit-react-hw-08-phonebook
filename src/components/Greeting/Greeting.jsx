import { Heading } from '@chakra-ui/react';
import css from './Greeting.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogedIn, selectUserName } from 'redux/auth/slice';

export default function Greeting() {
  const isLogedIn = useSelector(selectIsLogedIn);
  const username = useSelector(selectUserName);

  return (
    <div className={css.container}>
      {isLogedIn ? (
        <Heading size="3xl" className={css.header}>
          {`Hello, ${username}!`}
        </Heading>
      ) : (
        <p className={css.text}>
          To view contacts,{' '}
          <Link className={css.link} to="/register">
            sign up
          </Link>{' '}
          or{' '}
          <Link className={css.link} to="/login">
            log in
          </Link>
        </p>
      )}
    </div>
  );
}
