import styles from "./style-phonebook.module.css"
import PropTypes from "prop-types";
export const Filter = ({ value, func }) => {
    
    return <div><input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        required
        onChange={func}
    />
    </div>
}
Filter.propTypes = {
    func: PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
    
}