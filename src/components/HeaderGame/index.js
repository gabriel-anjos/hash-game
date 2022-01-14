import React from "react";
import './styles.css'
import LogoCollab from "../../objects/LogoCollab";
import MenuGame from "../../objects/MenuGame";
import AboutLink from "../../objects/AboutLink";
const HeaderGame =({onClick})=>{
    return(
        <header className="header-game">
            <LogoCollab />
            <AboutLink onClick={onClick}/>
            <MenuGame onClick={onClick}/>
        </header>
    );
}
export default HeaderGame;