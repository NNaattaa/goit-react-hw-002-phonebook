import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Form = styled.form`
  margin-bottom: 5rem;
  max-width: 44rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  padding: 2.4rem 3rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 2.6rem;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 2rem;
  width: 36rem;
  margin-bottom: 2rem;
  padding: 0.8rem 1rem 0.6rem;
  border-radius: 0.4rem;
`;

const Button = styled.button`
  display: block;
  font-size: 2rem;
  margin: 0 auto;
  max-width: 30rem;
  padding: 1rem 6rem;
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

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;
    onAddContact(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            required
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            required
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
