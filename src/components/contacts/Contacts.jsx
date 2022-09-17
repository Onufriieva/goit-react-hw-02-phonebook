import PropTypes from 'prop-types';
import { ListContacts } from './ContactsStyled';

const Contacts = ({contacts}) => {
  return (
    <ListContacts>
      {contacts.map(contact => 
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>)
      }    
    </ListContacts>
  )   
}

export default Contacts;

Contacts.propTypes = {
  ul: PropTypes.string,
  li: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  };
