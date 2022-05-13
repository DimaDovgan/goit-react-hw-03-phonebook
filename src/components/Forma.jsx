import React, { Component } from "react"
import styles from "./style-phonebook.module.css"
import PropTypes from "prop-types";
export class Form extends Component{
    state = {
        name: '',
        number: '',
    }
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    hendelChange = (event) => {
        const keyObject=event.currentTarget.name
        this.setState({[keyObject]:event.currentTarget.value})
        
    }
    addPerson = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.formReset();
        
    }
    formReset = () => {
        this.setState({
            name: '',
            number: '',
        });
    }
    
    render() {
        const {name,number}=this.state
        return <form onSubmit={this.addPerson} className={styles.forma}>
            <label className={styles.label}>Name<input
                className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
                onChange={this.hendelChange} /></label>
            <label className={styles.label}>Number
                <input
                    className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={this.hendelChange}
        /></label>
        <button type="submit" className={styles.button} >add</button>
        </form>
    }
}
