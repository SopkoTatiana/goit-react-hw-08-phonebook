import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import css from './LoginForm.module.css';
import { EmailIcon, UnlockIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/operations';
import { selectIsLogedIn } from 'redux/auth/slice';
import { Navigate } from 'react-router-dom';

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLogedIn);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements);
    const { email, password } = e.target.elements;
    console.log(email);
    const data = { email: email.value, password: password.value };

    dispatch(login(data));
  };

  if (isLogedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
        Log in
      </Button>
    </form>
  );
}
