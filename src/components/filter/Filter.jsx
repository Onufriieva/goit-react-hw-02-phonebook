

const Filter = ({filterValue, onChange}) => {
    return(
        <label htmlFor="">
          Find contacts by name
          <input 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          
          
          type="text"
           name="filter" 
          value={filterValue}
           onChange={onChange} />
        </label>
    )
}

export default Filter;