import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormBox, ButtonAdd, InputBox, LabelBox } from './FormStyled';

const inputId = nanoid();

const Form = ({onSubmit, onChange, nameValue, numberValue}) => {
  return(
    <FormBox>
      <form onSubmit={onSubmit}>
        <LabelBox htmlFor="">Name
          <InputBox
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChange}
            value={nameValue}    
            id={inputId}          
          /> 
        </LabelBox>
          
        <LabelBox htmlFor="">Number
          <InputBox
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChange}
            value={numberValue}  
            id={inputId}            
          />  
        </LabelBox>
      
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </form>
    </FormBox>  
  )
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  nameValue: PropTypes.string,
  numberValue: PropTypes.string,
};