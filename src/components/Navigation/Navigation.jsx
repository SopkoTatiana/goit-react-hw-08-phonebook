import { Button, ButtonGroup } from '@chakra-ui/react';
import css from './Navigation.module.css';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { selectIsLogedIn } from 'redux/auth/slice';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isLogedIn = useSelector(selectIsLogedIn);

  return (
    <nav className={css.navigation}>
      <ButtonGroup colorScheme="facebook" variant="ghost" size="lg">
        <StyledLink to={'/'}>
          <Button>Home</Button>
        </StyledLink>
        <StyledLink to={'/contacts'}>
          <Button>Contacts</Button>
        </StyledLink>
        {!isLogedIn && (
          <>
            <StyledLink to={'/register'}>
              <Button>Sign up</Button>
            </StyledLink>
            <StyledLink to={'/login'}>
              <Button>Log in</Button>
            </StyledLink>
          </>
        )}
      </ButtonGroup>
    </nav>
  );
}
