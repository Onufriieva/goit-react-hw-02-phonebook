import { Component } from "react";
import Form from "./form/Form";
import Contacts from "./contacts/Contacts";
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [   
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: ''
  }


  // formSubmitHandler = data => {
  //   console.log(data);
  // }


  reset = () => {
    this.setState({name: '', number: ''})
  };
  
  handleInputChange = (e) => {
    this.setState(
        {[e.currentTarget.name]: e.currentTarget.value}
      );

  }


  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      };
      return {
        contacts: [newContact, ...prevState.contacts],
        name: '',
        number: '',
      };
    });
  };


  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
   
       <h1>Phonebook</h1>

       <Form 
       onSubmit={this.handleSubmit}/>
       <Contacts
       contacts={this.state.contacts}
       />

      </div>
    );
  };
}
