import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 2rem;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 2rem;
  width: 40rem;
  margin-bottom: 3rem;
  margin-top: 0.4rem;
  padding: 0.8rem 1rem 0.6rem;
  border-radius: 0.4rem;
`;

function Filter({ value, onChangeFilter }) {
  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={({ target: { value } }) => onChangeFilter(value)}
        />
      </Label>
    </>
  );
}

export default Filter;
