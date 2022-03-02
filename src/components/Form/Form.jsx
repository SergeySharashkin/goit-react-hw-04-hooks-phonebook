import React from "react";
import { Titel } from "../ContactList/ContactList.styled";
import { AddForm, AddFormLabel, AddFormInput, AddFormBtn } from "./Form.styled";
// import PropTypes from "prop-types";
import PropTypes from "prop-types";
export default class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };
  formReset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <>
        <Titel>Добавьте контакт</Titel>
        <AddForm onSubmit={this.handleSubmit}>
          <AddFormLabel>
            Имя
            <AddFormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </AddFormLabel>
          <AddFormLabel>
            Телефон
            <AddFormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </AddFormLabel>
          <AddFormBtn type="submit">Добавить в телефонную книгу</AddFormBtn>
        </AddForm>
      </>
    );
  }
}
