import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  }

  addNewContact = (newContact) => {
    this.setState(({contacts})=>({contacts: [newContact, ...contacts]}))
  }
  
  removeContact = (idToRemove) => {
   this.setState(({contacts})=>({contacts: contacts.filter(item=>item.id!==idToRemove)}))
  }


  render() {
    return (
      <>
        <ContactForm onSubmit={this.addNewContact} />
        <ContactList contacts={this.state.contacts} onDeleteClick={this.removeContact} />
      </>
    )
  }
}
