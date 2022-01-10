import React from "react";
import './styles.css'
import Logo from "../../objects/logo";
import Menu from "../../objects/Menu";
import AboutLink from "../../objects/AboutLink";
const Header =()=>{
    return(
        <header className="header">
            <Logo/>
            <AboutLink/>
            <Menu/>
        </header>
    );
}
export default Header;