import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import css from './RegisterForm.module.css';
import { AtSignIcon, EmailIcon, UnlockIcon } from '@chakra-ui/icons';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/operations';
import { selectIsLogedIn } from 'redux/auth/slice';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLogedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(signup(data));
    e.target.reset();
  };

  if (isLogedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AtSignIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            name="name"
            variant="flushed"
            required
            placeholder="Name"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="email"
            name="email"
            variant="flushed"
            required
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <UnlockIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="password"
            name="password"
            variant="flushed"
            required
            placeholder="Password"
          />
        </InputGroup>
        <Button type="submit" colorScheme="blue" variant="outline">
          Sign up
        </Button>
      </form>
      <p className={css.text}>
        Already have an account?{' '}
        <Link className={css.link} to="/login">
          Log in
        </Link>
      </p>
    </>
  );
}
