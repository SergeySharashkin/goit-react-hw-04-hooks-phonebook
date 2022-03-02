import React from "react";
import PropTypes, { shape } from "prop-types";
import Contact from "./Contact";
import { Titel, List } from "./ContactList.styled";
const ContactList = ({ contacts, changeId }) => (
  <>
    <Titel> Ваши контакты </Titel>

    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          id={id}
          number={number}
          changeId={changeId}
        />
      ))}
    </List>
  </>
);
export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  changeId: PropTypes.func.isRequired,
};
