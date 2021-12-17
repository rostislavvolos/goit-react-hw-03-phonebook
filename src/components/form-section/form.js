import { Component } from "react";
import style from './FormStyle.module.css';
// import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
// import { initialState } from "./initialState";



const initialState = {
  number: "",
  name:"",
}
class Form extends Component {
state = {...initialState}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({...initialState});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className={style.nameTitle}>Name</p>
        <label>
          <input
            name="name"
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <p className={style.numberTitle}>Number</p>
        <label htmlFor="">
          <input
            name="number"
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button type="submit" className={style.button}>Add contact</button>
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
  addContact:()=>{},
}

Form.propTypes = {
  addContact: PropTypes.func,
}

export default Form;
