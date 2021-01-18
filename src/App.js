import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter';
import s from './App.module.css';
import shortid from 'shortid';

class App extends React.Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter: '',
  };
 
  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => {
      /*contacts: prevState.contacts.map(contacts => {
        if (contact.name !== this.state.name) {
          return {
            contact, ...prevState.contacts,
          };
        }
        return
        //alert('is already in contacts');
      }),*/
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));

  };
 
 
  render() {
    const filterContacts = this.getFilterContacts();
    
    return (
      <div className={s.container}>
          <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChangeFilter={ this.changeFilter}/>
        <ContactList
          contacts={filterContacts}
          onDelete={this.deleteContact}
        //contacts={this.state.contacts}
        />
        
        </div>
      );
  };  
};

export default App;
