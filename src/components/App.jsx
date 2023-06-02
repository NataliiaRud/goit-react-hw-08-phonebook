
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from "./Filter/Filter";
import { AppContainer, Title, Header } from "./App.styled";


export const App = () => {

   return (
    <AppContainer>
      <Header>Phonebook</Header>
      <ContactForm  />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};