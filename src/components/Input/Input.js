import React, { useState } from "react";
import './Input.scss';

export const Input = props => {
  const [valueItput, setvalueItput] = useState("");

  const { type, placeholder, name, takeData } = props;

  return (
    <input
      className='form-control'
      type={type}
      value={valueItput}
      onChange={event => setvalueItput(event.target.value)}
      onBlur={event => takeData(valueItput)}
      onKeyPress={event => (event.key === "Enter" ? takeData(valueItput) : "")}
      name={name}
      placeholder={placeholder}
    ></input>
  );
};
