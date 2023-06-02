import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { FormField, Field, Form, Button } from './ContactForm.styled';
import { addContact } from 'redux/operations';

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
          phone: '',
        }}
        onSubmit={(values, actions) => {
          onAddContact({ ...values, id: nanoid() });

          actions.resetForm();
        }}
      >
        <Form>
          <FormField htmlFor="name">Name</FormField>

          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <FormField htmlFor="phone">Number</FormField>

          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};
