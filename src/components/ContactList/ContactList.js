import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ListItem from "../ListItem";

const List = styled.ul`
  margin-left: 5rem;
  margin-bottom: 5rem;
`;

function ContactList({ contacts, onRemoveContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemoveContact(id)}
        />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
};

export default ContactList;
