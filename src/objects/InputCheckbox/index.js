import React from "react";
import './styles.css'
import LabelGame from "../LabelGame";
import InputGame from "../inputGame";


const InputCheckbox=({id='',value='',content='',onClick})=>{
    return(
        <>
        <InputGame id={id}value={value} type="checkbox"content={content}/>
        <LabelGame  htmlFor={id} content={content} onClick={onClick} />
      </>
    );
}
export default InputCheckbox;