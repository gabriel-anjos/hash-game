import React from "react";
import Label from "../Label";
const Input = ({ id, value , content }) => {
  return (
    <>
      <input id={id} type="checkbox" value={value}></input>
      <Label htmlFor={id} content={content} />
    </>
  );
};
export default Input;