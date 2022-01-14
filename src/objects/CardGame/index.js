import React from "react";
// import './styles.css';
import './styles.css'
const CardGame=({children})=>{
    return(<article className="card-game">
        {children}
    </article>)
}
export default CardGame;