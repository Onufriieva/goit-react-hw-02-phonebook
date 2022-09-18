import PropTypes from 'prop-types';
import { ListContacts, ButtonDel } from './ContactsStyled';

const Contacts = ({contacts, onClick}) => {
  return (
    <ListContacts>
      {contacts.map(contact => 
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDel type='button' onClick={onClick}>Delete</ButtonDel> 
        </li>)
      }   
     
    </ListContacts>
  )   
}

export default Contacts;

Contacts.propTypes = {
  ListContacts: PropTypes.string,
  li: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  };
