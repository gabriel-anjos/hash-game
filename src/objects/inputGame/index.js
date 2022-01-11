import React from "react";
const InputGame = ({ id='', value='',type='text' }) => {
  return (
      <input className="input-game" id={id} type={type} value={value}></input>
  );
};
export default InputGame;
