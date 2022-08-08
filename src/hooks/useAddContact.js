import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { showError } from '../utils/notification';
import { getContactsItems, isAddLoading } from '../redux/contactsSlice';
import * as contactsOperation from '../redux/contactsOperation';

export const useAddContact = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContactsItems);
  const loading = useSelector(isAddLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsName = contactsItems.map(contact => contact.name);

  const handleChangeInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const matchName = contactsName.some(
      contactName => contactName.toLowerCase() === name.toLowerCase()
    );

    if (matchName) {
      return showError(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(contactsOperation.addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return { name, number, handleSubmit, handleChangeInput, loading };
};
