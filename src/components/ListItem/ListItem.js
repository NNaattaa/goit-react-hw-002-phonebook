import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Item = styled.li`
  position: relative;
  font-size: 2rem;
  margin-bottom: 1rem;
  list-style-type: disc;
  &:last-of-type {
    margin-bottom: none;
  }
`;

const Button = styled.button`
  display: inline-block;
  position: absolute;
  right: 0;
  font-size: 1.8rem;
  padding: 0.2rem 2rem;
  border-radius: 2rem;
  background-color: snow;
  &:hover,
  &:focus {
    background-color: #40c965;
    color: snow;
    border-color: #7a7a7a;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    outline: none;
  }
  &:active {
    background-color: green;
  }
`;

function ListItem({ name, number, onRemove }) {
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={onRemove}>
        Delete
      </Button>
    </Item>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ListItem;
