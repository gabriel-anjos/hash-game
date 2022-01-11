import React from "react";
import './styles.css'
import Label from "../Label";
import InputGame from "../inputGame";
const InputCheckbox=({id='',value='',content=''})=>{
    return(
        <>
        <InputGame id={id}value={value} type="checkbox"content={content}/>
        <Label  htmlFor={id} content={content} />
      </>
    );
}
export default InputCheckbox;