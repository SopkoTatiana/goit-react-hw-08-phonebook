// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/slice';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { Button, Heading } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ContactList = () => {
  const entities = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Heading className={css.header} size="lg">
        Contacts
      </Heading>
      <Filter />
      {isLoading && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      {entities.length > 0 && (
        <ul className={css.contactList}>
          {entities.map(({ id, name, number }) => (
            <li key={id} className={css.contactList__item}>
              {name}: {number}
              <Button
                name="delete"
                leftIcon={<DeleteIcon />}
                colorScheme="red"
                variant="outline"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete contact
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
