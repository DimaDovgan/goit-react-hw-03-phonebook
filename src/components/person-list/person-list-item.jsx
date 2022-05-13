import PropTypes from "prop-types";
export const PersonlistItem = ({ name, number, id, deleteContact }) => {
    return <li >{name} : {number} <button onClick={deleteContact(id)}>Delete</button></li>
}
PersonlistItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    
}