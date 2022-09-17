import { LabelBox, InputBox } from "./FilterStyled";

const Filter = ({filterValue, onChange}) => {
    return(
        <LabelBox htmlFor="">
          Find contacts by name
          <InputBox 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          
          
          type="text"
           name="filter" 
          value={filterValue}
           onChange={onChange} />
        </LabelBox>
    )
}

export default Filter;