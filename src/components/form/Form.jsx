// import { Component } from "react";
import { nanoid } from 'nanoid';

const inputId = nanoid();

const Form = ({onSubmit, onChange, nameValue, numberValue}) => {
  return(
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChange}
            value={nameValue}    
            id={inputId}          
          /> 
        </label>
          
        <label htmlFor="">Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChange}
            value={numberValue}  
            id={inputId}            
          />  
        </label>
      
        <button type="submit">Add contact</button>
      </form>
    </div>  
  )
}

export default Form;


// class Form extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: ''
//   };

//   reset = () => {
//     this.setState({name: '', number: ''})
//   };
  
//   handleInputChange = (e) => {
//     this.setState(
//         {[e.currentTarget.name]: e.currentTarget.value}
//       );

//   }


//   handleSubmit = (e) => {
//     e.preventDefault(); 
//     // const form = e.currentTarget;

//     // const name = form.elements.name.value;
//     // const number = form.elements.number.value;
//     // const newContact = {
//     //   name,
//     //   number,
//     // };

//  const inputId = nanoid();

//     const contacts = this.state.contacts;
//   console.log(contacts)

//   this.setState(prevState => ({
//    contacts: prevState.contacts.map(contact => {
//       if(contact.inputId !== inputId) {
//         return {
//          contacts: [...prevState.contacts, contact]
//         }
//       }
//       console.log(contact)
//       return contact;
//     })
//   }));


//     // this.props.onSubmit({ name, number });

//     this.props.onSubmit(this.state);
//     this.reset();
//   };


//    render() {
//        return (
//       <div>
//           <form onSubmit={this.handleSubmit}>
//               <label htmlFor="">Name
//                 <input
//                   type="text"
//                   name="name"
//                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                   required
//                   onChange={this.handleInputChange}
//                   value={this.state.name}              
//                 /> 
//               </label>
  
                
//             <label htmlFor="">Number
//               <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 onChange={this.handleInputChange}
//                 value={this.state.number}              
//               />  
//             </label>
            
//             <button type="submit">Add contact</button>
//           </form>
//       </div>  
//     )}
//   }