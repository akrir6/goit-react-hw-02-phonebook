import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
// import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
  }

  handleFormSubmit = (newContactData) => {
    this.state.contacts.push(newContactData)
}

  render() {
    return (
      <>
        <ContactForm onSubmit={this.handleFormSubmit} />
      </>
    )
  }
}
