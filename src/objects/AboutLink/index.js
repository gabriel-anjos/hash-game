import React from "react";
import './styles.css'

const handClick =()=>{
   console.log("clicou");
}

const AboutLink =({className=''})=>{
   return(<a href='#to-do' className={`about-link ${className}`} 
   onClick={handClick}>Sobre</a>);

};

export default AboutLink;