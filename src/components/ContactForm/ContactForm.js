import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/Contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Field, Form } from './ContactForm.styled';
import { addContact } from 'redux/Contacts/operations';

import { Box, Button, Flex, FormLabel, InputGroup } from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onAddContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name}: is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAddContact({ ...values, id: nanoid() });

          actions.resetForm();
        }}
      >
        <Form>
          <Box mr="auto" ml="auto">
            <Flex
              align="left"
              justify="center"
              gap="4px"
              direction="column"
              maxW="300px"
              h="250px"
            >
              <FormLabel htmlFor="name">Name</FormLabel>
              <InputGroup>
                <Field
                  type="text"
                  name="name"
                  placeholder="enter name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </InputGroup>

              <FormLabel htmlFor="number">Phone</FormLabel>
              <InputGroup>
              
                <Field
                  type="tel"
                  name="number"
                  placeholder="enter number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
               
              </InputGroup>
              <Button type="submit" w="100%">
                Add contact
              </Button>
            </Flex>
          </Box>
        </Form>
      </Formik>
    </>
  );
};
