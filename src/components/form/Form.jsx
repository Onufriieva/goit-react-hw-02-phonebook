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