import React from "react";
import Collabcode from '../../img/logo.png'
import CollabCodeLight from'../../img/logo-light.png';
const LogoCollab =({light=false})=>{
    return(<img 
    className="logo-collab"
    src={light ? CollabCodeLight : Collabcode} 
    alt="logo collabcode"
    />);
}
export default LogoCollab;