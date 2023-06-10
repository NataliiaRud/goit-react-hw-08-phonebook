import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

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
    <Box w="100%" p="15px">
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        color="teal"
        mb="15px"
      >
        Contact List
      </Text>

      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      {contacts.length < 1 ? <p></p> : <Filter />}

      <ContactList />
    </Box>
  );
}
