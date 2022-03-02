import { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import SearchFilterInput from './SearchFilterInput/SearchFilterInput';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const contactsLocal = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLocal);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  },[]);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const formSubmitHandler = data => {
    const state = contacts
      .map(contact => {
        return contact.name.toLowerCase() === data.name.toLowerCase();
      })
      .includes(true);
    if (state) {
      alert('такой контакт уже есть');
    } else {
      data.id = nanoid(5);
      setContacts([...contacts, data]);
    }
  };
  const onDelForId = curentId => {
    const list = contacts.filter(({ id }) => id !== curentId);
    setContacts(list);
  };

  const filterInputHandler = input => {
    let inputLC = input.toLowerCase();
    setFilter(inputLC);
  };
  const onFilter = () => {
    if (filter) {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    } else {
      return contacts;
    }
  };

  const filtredContacts = onFilter();

  return (
    <>
      <Form onSubmit={formSubmitHandler} />
      <SearchFilterInput onChange={filterInputHandler} />
      <ContactList
        contacts={filtredContacts}
        filter={filter}
        changeId={onDelForId}
      />
    </>
  );
}
