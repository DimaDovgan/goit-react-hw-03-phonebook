import { PersonlistItem } from "./person-list-item"
import PropTypes from "prop-types";
export const ContactList = ({persons,deleteContact}) => {
    return <ul>{persons.map(({ name, number, id }) => <PersonlistItem key={id} name={name} number={number} id={id} deleteContact={ deleteContact}/>)}</ul> 
}
ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    persons:PropTypes.arrayOf(PropTypes.object),
    
}