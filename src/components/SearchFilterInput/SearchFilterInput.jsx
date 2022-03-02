import React from "react";
import { Label, Input, Form } from "./SearchFilterInput.styled";
import PropTypes from "prop-types";

function SearchFilterInput({onChange}) {
  const handleSearch = (event) => {
    const { value } = event.currentTarget;
   onChange(value);
  };
      return (
      <Form>
        <Label>
          Найти контакт по имени
          <Input
            type="text"
            name="filter"
            title="Name search. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleSearch}
            required
          />
        </Label>
      </Form>
    );
  }

export default SearchFilterInput;
SearchFilterInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};