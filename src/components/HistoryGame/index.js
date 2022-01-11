import React from "react";
import TagGame from "../../objects/TagGame";
import './styles.css';
const HistoryGame =({className=""})=>{
    return(
        <ol className={`history-game ${className}`}>
            <li className="action">
                <TagGame content="Adicionou X"/>
            </li>
            <li className="action">
                <TagGame content="Adicionou O"/>
            </li>
            <li className="action">
                <TagGame content="Adicionou X"/>
            </li>
            <li className="action">
                <TagGame content="Adicionou O"/>
            </li>
            <li className="action">
                <TagGame content="Adicionou O"/>
            </li>
            <li className="action">
                <TagGame content="Adicionou X"/>
            </li>
            <li className="action">
                <TagGame content="Adicionou O"/>
            </li>
            <li className="action">
                <TagGame content="Adicionou O"/>
            </li>
            <li className="action">
                <TagGame content="Adicionou X"/>
            </li>
            <li className="action">
                <TagGame className="-end" content="Empate!"/>
            </li>
        </ol>
    );
}
export default HistoryGame;