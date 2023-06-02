import React from 'react';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import {
  getFilter,
  getContacts,
  getError,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';

import {
  ContactContainer,
  List,
  Item,
  ItemWrapper,
  Btn,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const renderContacts = [...contacts].filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactContainer>
      {isLoading && <Loader />}
      {!renderContacts?.length && !error && !isLoading && (
        <p>No contacts found</p>
      )}

      {error && <p>{error}</p>}
      <List>
        {renderContacts.map(contact => (
          <Item key={contact.id}>
            <ItemWrapper>
              <span>{contact.name}: </span>
              <span>{contact.phone}</span>

              <Btn type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </Btn>
            </ItemWrapper>
          </Item>
        ))}
      </List>
    </ContactContainer>
  );
};
