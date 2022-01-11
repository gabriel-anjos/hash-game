import React from "react";
import './styles.css'
import LabelGame from "../LabelGame";
import InputGame from "../inputGame";

const handleClick=()=>{
  console.log('aeaee')
}
const InputCheckbox=({id='',value='',content=''})=>{
    return(
        <>
        <InputGame id={id}value={value} type="checkbox"content={content}/>
        <LabelGame onClick={handleClick} htmlFor={id} content={content} />
      </>
    );
}
export default InputCheckbox;