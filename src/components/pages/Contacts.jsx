import { Heading } from '@chakra-ui/react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogedIn } from 'redux/auth/slice';

export default function Contacts() {
  const isLogedIn = useSelector(selectIsLogedIn);

  if (!isLogedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Heading size="2xl">Phone book</Heading>
      <ContactForm />
      <ContactList />
    </>
  );
}
