// import style from "./Phonebook.module.css";
import React from "react";
import Form from "./form-section/form";
import { nanoid } from 'nanoid';
import ContactList from './ContactList/Contactlist';
import FilterList from './FilterList/FilterList';

class PhoneBook extends React.Component {
    state = {
        contacts: [
        ],
        filter: ''
      }

      getFilteredContacts() {
        return this.state.contacts.filter(contact => 
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
          )
      }


      addContact = contact => {
        if (this.state.contacts.some(item => item.name.toLowerCase() === contact.name.toLowerCase(),)){
          alert('go to dupa')
          return;
        }
        this.setState(prevState =>({
          contacts: [...prevState.contacts, {...contact, id: nanoid()}]
        }))
      }
      

      deleteContact = contactId => {
        this.setState(prevState => ({contacts: prevState.contacts.filter(
          contact =>  contact.id !== contactId) }))
      }

      onFilterHandleChange = filter => {
        this.setState({filter})
      }

      componentDidMount() {
        const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
       
        if(parsedContacts){
        this.setState({contacts: parsedContacts});
        }
       }
       
       
             componentDidUpdate (prevState, prevProps) {
             
               if (prevState !== this.state.contacts) {
                 localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
               }
             }
       
       

  render() {
    const {filter} = this.state;
    const visibleContacts = this.getFilteredContacts();
    // console.log(visibleContacts)
    return (
      <div>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact}/>
        <h2>Contacts</h2>
        <FilterList filter={filter} onFilterHandleChange={this.onFilterHandleChange}/>
        <ContactList contact={visibleContacts} onDelete={this.deleteContact}/>
      </div>

    );
  }
}

export default PhoneBook;
