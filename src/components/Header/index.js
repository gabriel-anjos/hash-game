import React from "react";
import './styles.css'
import LogoCollab from "../../objects/LogoCollab";
import Menu from "../../objects/Menu";
import AboutLink from "../../objects/AboutLink";
const Header =({onClick})=>{
    return(
        <header className="header">
            <LogoCollab />
            <AboutLink onClick={onClick}/>
            <Menu onClick={onClick}/>
        </header>
    );
}
export default Header;