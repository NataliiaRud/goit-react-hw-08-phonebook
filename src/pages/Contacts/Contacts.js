import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/Contacts/operations';
import { getIsLoading } from 'redux/Contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { getContacts } from 'redux/Contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>ContactList</h1>

      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      {contacts.length < 1 ? <p>No contacts found</p> : <Filter />}

      <ContactList />
    </>
  );
}
