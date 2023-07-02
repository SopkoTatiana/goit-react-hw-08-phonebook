// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { selectFilteredContacts } from 'redux/contacts/slice';
import { setContact } from 'redux/operations';
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AtSignIcon, PhoneIcon } from '@chakra-ui/icons';

export default function ContactForm() {
  const dispatch = useDispatch();
  const entities = useSelector(selectFilteredContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    if (entities.some(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    const contact = {
      name: name.value,
      number: number.value,
    };

    dispatch(setContact(contact));
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AtSignIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          name="name"
          variant="flushed"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <PhoneIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          name="number"
          variant="flushed"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Phone number"
        />
      </InputGroup>
      <Button type="submit" colorScheme="blue" variant="outline">
        Add contact
      </Button>
    </form>
  );
}
