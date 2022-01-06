import React from "react";
import Logo from "../../objects/logo";
import Menu from "../../objects/Menu";
import Sobre from "../../objects/Sobre";
const Header =()=>{
    return(
        <header className="header">
            <Logo/>
            <Sobre/>
            <Menu/>
        </header>
    );
}
export default Header;