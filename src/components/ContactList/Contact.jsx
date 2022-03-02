import PropTypes from "prop-types";
import { Item, Name, Number, RemoveButton } from "./ContactList.styled";
import React from "react";

const Contact = ({ id, name, number, changeId }) => {
  return (
    <Item>
      <Name>
        {name}: <Number>{number}</Number>
      </Name>
      <RemoveButton
        type="button"
        id={id}
        onClick={() => {
          changeId(id);
        }}
      >
        Удалить
      </RemoveButton>
    </Item>
  );
};
export default Contact;
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  changeId: PropTypes.func.isRequired,
};
